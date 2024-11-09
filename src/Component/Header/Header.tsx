import {Button} from "@mui/material";
import i18n from "../../i18next";
import changeLanguage from "../../indexHelper";
import React from "react";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t } = useTranslation('home')
    return(
        <div style={{width: 'calc(100%)', height: '2rem'}}>
            <div style={{justifyContent: 'start', display: 'flex'}}>
                <div style={{color: 'black'}} className='logo'/>
            </div>
            <div style={{justifyContent: 'end', display: 'flex'}}>
                <Button
                    size='small'
                    variant='outlined'
                    style={{
                        fontSize: '9px',
                        padding: '0',
                        position: 'absolute',
                        marginTop: '0.5rem',
                        left: i18n.language === 'fa' ? '0.7rem': '',
                        right: i18n.language === 'en' ? '0.7rem': '',
                        border: '1px solid white'}}
                    onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}

                >

                    {t('language')}
                </Button>
            </div>
        </div>
    )
}

export default Header;