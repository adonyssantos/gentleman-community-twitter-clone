import type { AppRouter } from '@root/server/src/routes/appTRPC.route';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { localUrl, vercelUrl } from '../../shared/constants';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `${vercelUrl}/api/trpc`
      : `${localUrl}/api/trpc/`;

    if (typeof window !== 'undefined') {
      return {
        links: [
          httpBatchLink({
            url: `${localUrl}/api/trpc/`,
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
