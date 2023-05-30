import { z } from 'zod';

export const VERCEL_URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
export const LOCAL_URL = process.env.LOCAL_URL ?? 'http://localhost:3000';

export const userSchema = z.object({ email: z.string().email(), password: z.string() });
