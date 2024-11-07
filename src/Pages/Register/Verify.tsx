import React, {useState} from 'react'
import {Button, Card, CardContent, CardMedia, Grid2, TextField} from "@mui/material";
import i18n from "../../i18next";
import changeLanguage from "../../indexHelper";
import {useTranslation} from "react-i18next";
import {useNavigation} from "react-router-dom";
import rbImage from "../../Assets/Fingerprint-bro.png";

export const Verify = () => {
    const [imageUrl, setImageUrl] = useState(rbImage);
    const {t} = useTranslation('register')
    // const navigate = useNavigation()

    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%) - 1rem', padding: '1rem', height: '100vh', boxSizing: 'border-box'}}>
                <Button
                    size='small'
                    variant='outlined'
                    className='btn'
                    style={{
                        fontSize: '9px',
                        padding: '0',
                        position: 'absolute',
                        left: i18n.language === 'en' ? '0.7rem': '',
                        right: i18n.language === 'fa' ? '0.7rem': '',
                        border: '1px solid white'}}
                    onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}
                >
                    {i18n.language === 'fa' ? t('register.btn.fa') : t('register.btn.en')}
                </Button>
                <div style={{width: '85%', margin: 'auto'}}>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="Paella dish"
                        style={{
                            width: '40%',
                            margin: 'auto'
                        }}
                    />
                </div>
                <CardContent style={{justifyContent: 'center', display: 'flex'}}>
                    <Grid2 size={12} container spacing={3}>
                        <Grid2 size={6} style={{display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
                            <span style={{fontSize: '1rem', fontWeight: '500'}}>اصلاح شماره تماس</span>
                            <span style={{fontSize: '1rem', fontWeight: '500'}}>کد احراز هویت</span>
                        </Grid2>
                        <Grid2 size={12}>
                            <span style={{fontSize: '1rem', fontWeight: '500'}}>کد ارسال شده به شماره 0124949440 را وارد کنید.</span>
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField label='کد ارسالی' variant={"standard"} style={{width: '50%'}}/>
                        </Grid2>
                        <Grid2 size={12}>
                            <Button  style={{width: '50%'}}>تایید</Button>
                        </Grid2>
                    </Grid2>
                </CardContent>

            </Card>
        </React.Fragment>
    )
}