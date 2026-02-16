import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';
import waitlistRoute from './routes/waitlist.js';

const app = new Hono();

// Logging
app.use('*', logger());

// CORS — allow frontend origins
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') ?? ['http://localhost:4321'];

app.use('/api/*', cors({
  origin: allowedOrigins,
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}));

// Health check
app.get('/', (c) => c.json({ status: 'ok', service: 'vonavky-api' }));

// Routes
app.route('/api/waitlist', waitlistRoute);

// Global error handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

// Start server
const port = Number(process.env.PORT) || 3000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`API running on http://localhost:${port}`);
});
