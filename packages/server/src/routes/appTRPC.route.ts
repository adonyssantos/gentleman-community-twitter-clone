import { z } from 'zod';
import { publicProcedure, protectedProcedure, router } from '../trpc';
import { authRouter } from './auth.route';
import { userRouter } from './user.route';

export const appRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),

  getSecretMessage: protectedProcedure.query(() => {
    const newLocal = 'you can now see this secret message!';
    return newLocal;
  }),

  auth: authRouter,

  user: userRouter,
});

export type AppRouter = typeof appRouter;
