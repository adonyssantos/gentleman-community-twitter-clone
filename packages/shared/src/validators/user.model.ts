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

export const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  username: z.string().optional(),
});
