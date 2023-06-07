import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nEN } from './langs/en';
import { i18nES } from './langs/es';

export const initI18n = () => {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      fallbackLng: 'en',
      lowerCaseLng: true,
      supportedLngs: ['en', 'es'],
      returnEmptyString: true,
      interpolation: {
        escapeValue: false,
        skipOnVariables: false,
      },
      debug: process.env.NODE_ENV === 'development',
      resources: {
        en: {
          ...i18nEN,
        },
        es: {
          ...i18nES,
        },
      },
    });
  }

  return i18next;
};
