import { procedure, router } from "../trpc";
import { z } from 'zod';

export const appRouter = router({
  toggleLike: procedure
    .input(
      z.object({
        entityId: z.string(),
        liked: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { entityId, liked } = input;

      const existingLike = await ctx.prisma.like.findFirst({
        where: { entityId },
      });

      if (existingLike) {
        await ctx.prisma.like.delete({
          where: { id: existingLike.id },
        });
        return { success: true, liked: false };
      } else {
        await ctx.prisma.like.create({
          data: { entityId, liked },
        });
        return { success: true, liked };
      }
    }),

  getIsLiked: procedure
    .input(z.object({ entityId: z.string() }))
    .query(async ({ input, ctx }) => {
      const chartData = await ctx.prisma.like.findFirst({
        where: {
          entityId: input.entityId,
        },
      });

      return chartData?.liked || false;
    }),
});

export type AppRouter = typeof appRouter;
