import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure.query(() => 'hello from TRPC'),
});

export type AppRouter = typeof appRouter;
