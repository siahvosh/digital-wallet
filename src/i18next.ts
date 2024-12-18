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
import transferEn from './Locales/en/Transfer.json'
import transferFa from './Locales/fa/Transfer.json'
import callbackFa from './Locales/fa/Callback.json'
import callbackEn from './Locales/en/Callback.json'
import creditEn from './Locales/en/Credit.json'
import creditFa from './Locales/fa/Credit.json'
import internetFa from './Locales/fa/InternetPackage.json'
import internetEn from './Locales/en/InternetPackage.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                login: loginEn,
                register: registerEn,
                home: homeEn,
                walletModal: walletModalEn,
                transfer: transferEn,
                callback: callbackEn,
                credit: creditEn,
                internet: internetEn,
            },
            fa: {
                login: loginFa,
                register: registerFa,
                home: homeFa,
                transfer: transferFa,
                walletModal: walletModalFa,
                callback: callbackFa,
                credit: creditFa,
                internet: internetFa,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

