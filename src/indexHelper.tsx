import i18n from "./i18next";
import './App.css';

const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    const body = document.body;

    if (lang === 'fa') {
        body.classList.add('fa');
        body.setAttribute('lang', 'fa');
    }
    else {
        body.classList.remove('fa');
        body.setAttribute('lang', 'en');
    }

}

export const Sep1000 = (value: string) => {
    const cleanValue = value.replace(/,/g, '');

    if (cleanValue === '' || isNaN(Number(cleanValue))) {
        return '';
    }

    return Number(cleanValue).toLocaleString('en-US')
}

export const convertToInt = (value: string) => {
    return parseInt(value.replace(/,/g, ''), 10)
}

export default changeLanguage;
