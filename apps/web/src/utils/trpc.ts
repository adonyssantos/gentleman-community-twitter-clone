import type { AppRouter } from '@root/server/src/routes/appTRPC.route';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc/';

    if (typeof window !== 'undefined') {
      return {
        links: [
          httpBatchLink({
            url: 'http://localhost:3000/api/trpc',
          }),
        ],
      };
    }

    return {
      links: [
        httpBatchLink({
          url,
        }),
      ],
    };
  },
  ssr: true,
});
