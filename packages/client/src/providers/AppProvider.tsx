import TrpcProvider from '../trpc/trpc.provider';
import { TranslationsProvider } from './TranslationsProvider';

export interface AppProviderProps {
  children: React.ReactNode;
  pageProps: any;
}

export function AppProvider({ pageProps, children }: AppProviderProps) {
  return (
    <TrpcProvider pageProps={pageProps}>
      <TranslationsProvider>{children}</TranslationsProvider>
    </TrpcProvider>
  );
}
