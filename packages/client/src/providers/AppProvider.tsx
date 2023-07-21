import { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth.context';
import TrpcProvider from '../trpc/trpc.provider';
import { TranslationsProvider } from './TranslationsProvider';

export interface AppProviderProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

export function AppProvider({ pageProps, children }: AppProviderProps) {
  return (
    <TrpcProvider pageProps={pageProps}>
      <TranslationsProvider>
        <AuthProvider>{children}</AuthProvider>
      </TranslationsProvider>
    </TrpcProvider>
  );
}
