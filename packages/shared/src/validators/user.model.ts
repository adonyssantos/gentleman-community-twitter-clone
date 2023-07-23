import { z } from 'zod';

export const singupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const validateSchema = z.object({ username: z.string() });

export const passwordResetSchema = z.object({
  email: z.string().email(),
});
