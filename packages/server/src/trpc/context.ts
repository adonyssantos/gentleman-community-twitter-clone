import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { GetServerSideProps } from 'next';
import { prisma } from '../prisma';

export async function createContext(context: CreateNextContextOptions | GetServerSideProps) {
  return {
    context,
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
