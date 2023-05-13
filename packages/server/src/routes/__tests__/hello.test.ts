import { describe, expect, test } from '@jest/globals';
import type { inferProcedureInput } from '@trpc/server';
import { Session } from 'next-auth';
import { prisma } from '../../../utils/prisma';
import { AppRouter, appRouter } from '../appTRPC.route';

describe('AppRouter', () => {
  test('should return Hello World from TRPC', async () => {
    const caller = appRouter.createCaller({ session: null, prisma: prisma });
    type Input = inferProcedureInput<AppRouter['hello']>;
    const input: Input = {
      text: 'World',
    };
    const result = await caller.hello(input);
    expect(result).toStrictEqual({ greeting: 'Hello World' });
  });

  test('should return secret message protected procedure from TRPC', async () => {
    const mockSession: Session = {
      expires: new Date().toISOString(),
      user: {
        id: 'test',
        name: 'John Doe',
      },
    };
    const caller = appRouter.createCaller({ session: mockSession, prisma: prisma });
    const result = await caller.getSecretMessage();
    expect(result).toBe('you can now see this secret message!');
  });
});
