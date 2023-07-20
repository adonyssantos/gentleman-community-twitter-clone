import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const validateSchema = z.object({ username: z.string() });
