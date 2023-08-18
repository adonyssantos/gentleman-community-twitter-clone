import { updateSchema } from '@root/shared/validators/user.model';
import { TRPCError } from '@trpc/server';
import { protectedProcedure, router } from '../trpc';

export const userRouter = router({
  update: protectedProcedure.input(updateSchema).mutation(async ({ ctx, input }) => {
    try {
      const user = await ctx.prisma.user.update({
        where: { id: input.id },
        data: input,
      });
      return user;
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Something went wrong',
        cause: error,
      });
    }
  }),
});
