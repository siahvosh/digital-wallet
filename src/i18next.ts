import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import loginEn from './Locales/en/Login.json';
import registerEn from './Locales/en/Register.json';
import loginFa from './Locales/fa/Login.json';
import registerFa from './Locales/fa/Register.json';
import homeFa from './Locales/fa/Home.json';
import homeEn from './Locales/en/Home.json';
import walletModalFa from './Locales/fa/WalletModal.json'
import walletModalEn from './Locales/en/WalletModal.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                login: loginEn,
                register: registerEn,
                home: homeEn,
                walletModal: walletModalEn
            },
            fa: {
                login: loginFa,
                register: registerFa,
                home: homeFa,
                walletModal: walletModalFa
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

