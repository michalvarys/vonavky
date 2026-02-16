import { z } from 'zod';

export const waitlistSchema = z.object({
  variant: z.string().min(1),
  fragrance: z.enum(['him', 'her', 'both']),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
