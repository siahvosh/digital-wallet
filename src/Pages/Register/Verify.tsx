import React, {useEffect, useState} from 'react'
import {Button, Card, CardContent, CardMedia, Grid2, Link, TextField} from "@mui/material";
import i18n from "../../i18next";
import changeLanguage from "../../indexHelper";
import {useTranslation} from "react-i18next";
import {NavLink, useNavigate} from "react-router-dom";
import rbImage from "../../Assets/Fingerprint-bro.png";
import {useData} from "../../DataContext";

export const Verify = () => {
    const [imageUrl, setImageUrl] = useState(rbImage);
    const {t} = useTranslation('register')
    const navigate = useNavigate()
    const { phoneNumber } = useData();
    const { setPhoneNumber } = useData();

    const goToRegister = () =>{
        setPhoneNumber(phoneNumber)
        navigate('/' )
    }

    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%) - 1rem', padding: '1rem', height: '100vh', boxSizing: 'border-box'}}>
                <Button
                    size='small'
                    variant='outlined'
                    style={{
                        fontSize: '9px',
                        padding: '0',
                        position: 'absolute',
                        textAlign: 'right',
                        left: i18n.language === 'en' ? '0.7rem': '',
                        right: i18n.language === 'fa' ? '0.7rem': '',
                        border: '1px solid white'}}
                    onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}
                >
                    {t('register.language')}
                </Button>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt="Paella dish"
                    className='image'
                />
                <CardContent style={{justifyContent: 'center', display: 'flex'}}>
                    <Grid2 container spacing={3}>
                        <Grid2 size={8} style={{display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
                            <span>{t('register.verifyCode')} </span>
                            <Link href='/register'>{t('register.editNumber')}</Link>
                        </Grid2>
                        <Grid2 size={12}>
                            <span style={{fontSize: '1rem', fontWeight: '500'}}> {t('register.titleVerify')} {phoneNumber}. </span>
                        </Grid2>
                        <Grid2 size={8} style={{margin: 'auto'}}>
                            <TextField sx={{
                                '& .MuiInputLabel-root': {
                                    left: i18n.language === 'fa' ? 'auto' : 0,
                                },
                            }} label={t('register.codeLabel')} variant={"standard"} style={{width: '100%'}}/>
                        </Grid2>
                        <Grid2 size={8} style={{margin: 'auto'}}>
                            <Button onClick={goToRegister} style={{width: '100%'}}>{t('register.apply')}</Button>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}