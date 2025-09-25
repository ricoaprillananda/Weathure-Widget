import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import id from './locales/id.json';

const resources = {
    en: { translation: en },
    id: { translation: id },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language.startsWith('id') ? 'id' : 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        detection: { order: ['navigator', 'htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'querystring', 'path', 'subdomain'], caches: ['localStorage', 'cookie'] },
    });

export default i18n;
