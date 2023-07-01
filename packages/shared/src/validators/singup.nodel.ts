import { z } from 'zod';

export const singupSchema = z.object({ name: z.string(), email: z.string().email() });
