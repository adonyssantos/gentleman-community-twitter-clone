import { AuthProvider } from '../context/auth.context';
import TrpcProvider from '../trpc/trpc.provider.native';
import { TranslationsProvider } from './TranslationsProvider';

export interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <TrpcProvider>
      <TranslationsProvider>
        <AuthProvider>{children}</AuthProvider>
      </TranslationsProvider>
    </TrpcProvider>
  );
}
