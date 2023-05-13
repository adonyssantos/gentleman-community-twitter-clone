import type { AppRouter } from '@root/server/src/routes/appTRPC.route';
import { LOCAL_URL, VERCEL_URL } from '@root/shared';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `${VERCEL_URL}/api/trpc`
      : `${LOCAL_URL}/api/trpc/`;

    if (typeof window !== 'undefined') {
      return {
        links: [
          httpBatchLink({
            url: `${LOCAL_URL}/api/trpc/`,
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
