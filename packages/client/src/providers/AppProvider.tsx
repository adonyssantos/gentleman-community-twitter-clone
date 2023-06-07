import { TranslationsProvider } from './TranslationsProvider';

export interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <TranslationsProvider>{children}</TranslationsProvider>;
}
