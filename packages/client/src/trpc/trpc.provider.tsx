import React, { ReactNode } from 'react';
import { LOCAL_URL, VERCEL_URL } from '@root/shared/constants';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { trpc } from '.';

const getUrl = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL ? `${VERCEL_URL}/api/trpc` : `${LOCAL_URL}/api/trpc/`;

const customFetch = async (url: string, options = {}) => {
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
  });
  const cookie = response.headers.get('set-cookie');
  if (cookie) {
    localStorage.setItem('sb-cookie', cookie);
  }
  return response;
};

export { customFetch };

interface ITrpcProviderProps {
  children: ReactNode;
  pageProps: any;
}

const TrpcProvider = ({ pageProps, children }: ITrpcProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: Infinity, retry: 2, cacheTime: 1000 * 60 * 30 },
        },
      }),
  );

  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: getUrl(),
          fetch(url: any, options) {
            return customFetch(url, options);
          },
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydrateState}>{children}</Hydrate>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;