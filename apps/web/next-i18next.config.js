const path = require('path');
const i18nEN = require('../../packages/client/src/i18n/langs/en.module');
const i18nES = require('../../packages/client/src/i18n/langs/es.module');

const isBrowser = typeof window !== 'undefined';
const localePublicFolder = undefined;

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  // debug: process.env.NODE_ENV !== 'production',
  initImmediate: true,
  saveMissing: false,
  strictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  fallbackLng: 'en',
  react: {
    useSuspense: false,
  },
  load: 'currentOnly',
  resources: {
    en: {
      ...i18nEN,
    },
    es: {
      ...i18nES,
    },
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: !isBrowser
    ? path.resolve('../../packages/client/src/i18n/locales')
    : localePublicFolder,
  serializeConfig: false,
  interpolation: {
    skipOnVariables: false,
  },
};
