import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initI18n } from '../i18n/setup';

export interface I18nProviderProps {
  children: ReactNode;
}

const i18n = initI18n();

export function TranslationsProvider({ children }: I18nProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
