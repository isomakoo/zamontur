import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from '../public/locates/uz.json';
import enTranslation from '../public/locates/en.json';
import ruTranslation from '../public/locates/ru.json';

const resources = {
  uz: {
    translation: uzTranslation,
  },
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', // boshlang'ich til
    interpolation: {
      escapeValue: false, // React allaqachon xatosiz
    },
  });

export default i18n;
