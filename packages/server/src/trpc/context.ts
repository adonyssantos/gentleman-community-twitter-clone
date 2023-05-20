import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { appContainer } from '../containers/app.container';

// eslint-disable-next-line unused-imports/no-unused-vars
export async function createContextInner(_context: {}) {
  return {};
}

export type Context = inferAsyncReturnType<typeof createContext>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  // for API-response caching see https://trpc.io/docs/caching
  const appContext = appContainer(opts);
  const session = await appContext.supabase.auth.getSession();

  return {
    session,
    ...appContext,
  };
}
