import { describe, expect, test } from '@jest/globals';
import type { inferProcedureInput } from '@trpc/server';
import { createContextInner } from '../../trpc/context';
import { AppRouter, appRouter } from '../appTRPC.route';

describe('AppRouter', () => {
  test('should return Hello World from TRPC', async () => {
    const context = await createContextInner({});
    const caller = appRouter.createCaller(context);

    const input: inferProcedureInput<AppRouter['hello']> = {
      text: 'World',
    };
    const result = await caller.hello(input);
    expect(result).toStrictEqual({ greeting: 'Hello World' });
  });

  // TODO: Fix this test
  // test('should return secret message protected procedure from TRPC', async () => {
  //   const mockSession: Session = {
  //     expires: new Date().toISOString(),
  //     user: {
  //       name: 'John Doe',
  //     },
  //   };
  //   const caller = appRouter.createCaller({ session: mockSession });
  //   const result = await caller.getSecretMessage();
  //   expect(result).toBe('you can now see this secret message!');
  // });
});
