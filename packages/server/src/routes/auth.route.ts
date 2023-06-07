import { userSchema } from '@root/shared/validators/user.model';
import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from '../trpc';

export const authRouter = router({
  login: publicProcedure.input(userSchema).mutation(async ({ input, ctx }) => {
    const { data, error } = await ctx.supabase.auth.signInWithPassword(input);
    return { data, error };
  }),

  logout: publicProcedure.mutation(async ({ ctx }) => ctx.supabase.auth.signOut()),

  singup: publicProcedure.input(userSchema).mutation(async ({ input, ctx }) => {
    const { data, error } = await ctx.supabase.auth.signUp(input);
    if (data.user && data.user.email) {
      await ctx.supabase.auth.signInWithOtp({ email: data.user.email });
    } else {
      throw new TRPCError({ message: 'Something went wrong', code: 'BAD_REQUEST' });
    }
    return { data, error };
  }),
});
