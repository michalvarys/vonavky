import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import db from '../db/client.js';
import stripe from '../lib/stripe.js';
import { checkoutSchema } from '../lib/validation.js';

const app = new Hono();

app.post('/', zValidator('json', checkoutSchema), async (c) => {
  const data = c.req.valid('json');
  const frontendUrl = process.env.FRONTEND_URL || 'https://michalvarys.github.io/vonavky';

  try {
    // Create order record
    const orderResult = await db.execute({
      sql: `
        INSERT INTO orders (
          waitlist_id, variant, product_type, amount,
          email, name, phone, status
        ) VALUES (?, ?, ?, 39900, ?, ?, ?, 'pending')
        RETURNING id
      `,
      args: [
        data.waitlistEntryId ?? null,
        data.variant,
        data.productType,
        data.email,
        data.name,
        data.phone,
      ],
    });

    const orderId = Number(orderResult.rows[0]?.id);

    // Create Stripe checkout session
    const productName = data.productType === 'double'
      ? 'Parfém (1+1 zdarma)'
      : 'Parfém (1x)';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'czk',
            product_data: {
              name: productName,
              description: `Limitovaná edice – varianta ${data.variant}`,
            },
            unit_amount: 39900,
          },
          quantity: 1,
        },
      ],
      customer_email: data.email,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['CZ', 'SK'],
      },
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: frontendUrl,
      metadata: {
        orderId: orderId.toString(),
        variant: data.variant,
        productType: data.productType,
        customerPhone: data.phone,
      },
    });

    // Store Stripe session ID
    await db.execute({
      sql: 'UPDATE orders SET stripe_session_id = ? WHERE id = ?',
      args: [session.id, orderId],
    });

    return c.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return c.json({ error: 'Chyba při vytváření objednávky' }, 500);
  }
});

export default app;
