import { createContext } from '@root/server/src/context';
import { appRouter } from '@root/server/src/routes/appTRPC.route';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({ router: appRouter, createContext: createContext });
