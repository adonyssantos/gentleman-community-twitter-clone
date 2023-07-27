// import { describe, expect, test } from '@jest/globals';
// import type { inferProcedureInput } from '@trpc/server';
// import { AppRouter, appRouter } from '../appTRPC.route';

// describe('AppRouter', () => {
//   test('password reset email', async () => {
//     const caller = appRouter.createCaller({ supabase });
//     // const input: inferProcedureInput<AppRouter['hello']> = {
//     //   text: 'World',
//     // };
//     // const result = await caller.hello(input);
//     // expect(result).toStrictEqual({ greeting: 'Hello World' });
//     //@ts-ignore
//     const result = await caller.auth.passwordReset('example@gamil.com');
//     expect(result).toStrictEqual({ greeting: 'Hello World' });
//   });
// });
