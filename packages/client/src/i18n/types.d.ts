import 'i18next';
import type { i18nEN } from './langs/en';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'common' | 'signin' | 'signup' | 'password_reset' | 'getting_started';
    // custom resources type
    resources: typeof i18nEN;
    // other
  }
}
