import { appRouter, createContext } from '@root/server';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({ router: appRouter, createContext: createContext });
