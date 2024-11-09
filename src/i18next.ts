import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import loginEn from './Locales/en/Login.json';
import registerEn from './Locales/en/Register.json';
import loginFa from './Locales/fa/Login.json';
import registerFa from './Locales/fa/Register.json';
import homeFa from './Locales/fa/Home.json';
import homeEn from './Locales/en/Home.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                login: loginEn,
                register: registerEn,
                home: homeEn
            },
            fa: {
                login: loginFa,
                register: registerFa,
                home: homeFa
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

