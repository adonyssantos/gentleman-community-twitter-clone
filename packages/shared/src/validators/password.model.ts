import { z } from 'zod';

export const passwordResetSchema = z.object({
  email: z.string().email(),
});
