import { z } from 'zod';

export const userSchema = z.object({ email: z.string().email(), password: z.string() });

export const validateSchema = z.object({ username: z.string() });
