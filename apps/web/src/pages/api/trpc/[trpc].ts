import { appRouter } from '@root/server/src/routes/appTRPC.route';
import { createTRPCContext } from '@root/server/src/trpc';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({ router: appRouter, createContext: createTRPCContext });
