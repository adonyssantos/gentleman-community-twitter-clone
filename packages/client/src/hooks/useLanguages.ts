import { useState } from 'react';
import i18n from 'i18next';
import type { SupportedLanguage } from '../i18n/langs/langs.types';

export function useLanguages() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n?.language);
  const changeLanguage = (locale: SupportedLanguage) => {
    setCurrentLanguage(locale);
    return i18n?.changeLanguage(locale);
  };
  return {
    changeLanguage,
    currentLanguage,
  };
}
