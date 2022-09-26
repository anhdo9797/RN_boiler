import languageDetectorPlugin from '../utils/languagePlugin';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import vietnamese from './vi.json';

//empty for now
const resources = {
  en: {
    translation: english,
  },
  vi: {
    translation: vietnamese,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
