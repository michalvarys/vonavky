import { z } from 'zod';

export const waitlistSchema = z.object({
  variant: z.string().min(1),
  fragrance: z.enum(['him', 'her', 'both']),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
});

export const checkoutSchema = z.object({
  variant: z.string().min(1),
  productType: z.enum(['single', 'double']),
  email: z.string().email(),
  name: z.string().min(2),
  phone: z.string().min(9),
  waitlistEntryId: z.number().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
