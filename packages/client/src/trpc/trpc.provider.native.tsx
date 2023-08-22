import React, { ReactNode } from 'react';
import { LOCAL_URL } from '@root/shared/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '.';

const getUrl = () => `${LOCAL_URL}/api/trpc/`;

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

interface TrpcProviderProps {
  children: ReactNode;
}

const TrpcProvider = ({ children }: TrpcProviderProps) => {
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
      transformer: superjson,
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;
