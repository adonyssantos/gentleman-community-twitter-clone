import { loginSchema, singupSchema, validateSchema } from '@root/shared/validators/user.model';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { generateFromEmail } from '../utils/usernameGenerator';

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { data, error } = await ctx.supabase.auth.signInWithPassword(input);
    return { data, error };
  }),

  logout: publicProcedure.mutation(async ({ ctx }) => ctx.supabase.auth.signOut()),

  singup: publicProcedure.input(singupSchema).mutation(async ({ input, ctx }) => {
    const { data, error } = await ctx.supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        data: {
          name: input.name,
          email: input.email,
          username: generateFromEmail(input.email, 2),
        },
      },
    });
    if (!data.user && error) {
      throw new TRPCError({ message: 'Something went wrong', code: 'BAD_REQUEST' });
    }

    return { data, error };
  }),

  validateUsername: publicProcedure
    .input(validateSchema)
    .output(z.boolean())
    .query(async ({ input, ctx }) => {
      const user = ctx.prisma.user.findUnique({ where: { username: input.username } });
      return !!user;
    }),
});
