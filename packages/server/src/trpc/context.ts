import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '../prisma';

// eslint-disable-next-line unused-imports/no-unused-vars
export async function createContextInner(_context: {}) {
  return {};
}

export type Context = inferAsyncReturnType<typeof createContextInner>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/caching

  return await createContextInner({
    prisma,
    ...opts,
  });
}
