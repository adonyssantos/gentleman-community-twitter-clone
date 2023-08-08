import { z } from 'zod';

export const userSchema = z.object({ email: z.string().email(), password: z.string() });

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

export const usernameGeneratorInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const usernameGeneratorOutputSchema = z.array(z.string());
