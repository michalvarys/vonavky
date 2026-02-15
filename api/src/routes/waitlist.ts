import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import db from '../db/client.js';
import { waitlistSchema } from '../lib/validation.js';

const app = new Hono();

app.post('/', zValidator('json', waitlistSchema), async (c) => {
  const data = c.req.valid('json');

  try {
    const result = await db.execute({
      sql: `
        INSERT INTO waitlist (variant, fragrance, name, email, phone)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(email, variant) DO UPDATE SET
          fragrance = excluded.fragrance,
          name = excluded.name,
          phone = excluded.phone
        RETURNING id
      `,
      args: [data.variant, data.fragrance, data.name, data.email, data.phone],
    });

    const entryId = Number(result.rows[0]?.id);

    return c.json({ success: true, entryId });
  } catch (error) {
    console.error('Waitlist error:', error);
    return c.json({ success: false, message: 'Chyba při zápisu' }, 500);
  }
});

export default app;
