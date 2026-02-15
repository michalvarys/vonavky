import { Hono } from 'hono';
import stripe from '../lib/stripe.js';
import db from '../db/client.js';

const app = new Hono();

app.post('/', async (c) => {
  const signature = c.req.header('stripe-signature');
  if (!signature) {
    return c.json({ error: 'Missing signature' }, 400);
  }

  try {
    const body = await c.req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;

        if (orderId) {
          await db.execute({
            sql: `
              UPDATE orders
              SET status = 'paid',
                  stripe_payment_intent = ?,
                  shipping = ?,
                  paid_at = datetime('now')
              WHERE id = ?
            `,
            args: [
              (session.payment_intent as string) ?? null,
              session.shipping_details ? JSON.stringify(session.shipping_details) : null,
              orderId,
            ],
          });
        }
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;

        if (orderId) {
          await db.execute({
            sql: 'UPDATE orders SET status = ? WHERE id = ?',
            args: ['cancelled', orderId],
          });
        }
        break;
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return c.json({ error: 'Webhook failed' }, 400);
  }
});

export default app;
