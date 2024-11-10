import React, {useState} from 'react'
import {Button, Card, CardContent, CardMedia, Grid2, TextField} from "@mui/material";
import rbImage from '../../Assets/Tablet login-cuate.png';
import {useTranslation} from "react-i18next";
import i18n from '../../i18next'
import changeLanguage from "../../indexHelper";
import {useNavigate} from "react-router-dom";
import './../../App.css'
import {useData} from "../../DataContext";

export const Register = () => {
    const navigate = useNavigate()
    const { t } = useTranslation('register')
    const [imageUrl] = useState<any>(rbImage);
    const { setPhoneNumber } = useData();
    const { phoneNumber } = useData();

    const handelInputNumber = (e: string) => {
        setPhoneNumber(e)
    }

    return(
        <React.Fragment>
            <Card style={{width: 'calc(100%) - 1rem', padding: '1rem', height: '100vh', boxSizing: 'border-box'}}>
                <Button
                    size='small'
                    variant='outlined'
                    style={{
                        fontSize: '9px',
                        padding: '0',
                        position: 'absolute',
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
                    <Grid2 container spacing={3} style={{justifyContent: 'center'}}>
                        <Grid2 size={10}>
                            <span style={{fontSize: '1.5rem', fontWeight: '500'}}> {t('register.title')} </span>
                        </Grid2>
                        <Grid2 size={10}>
                            <span style={{fontSize: '1.5rem', fontWeight: '500'}}>{t('register.description')}</span>
                        </Grid2>
                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <TextField sx={{
                                '& .MuiInputLabel-root': {
                                    left: i18n.language === 'fa' ? 'auto' : 0,
                                },
                            }} onChange={(e) => handelInputNumber(e.target.value)}  label={t('register.label')} variant={"standard"} style={{width: '100%'}}/>
                        </Grid2>
                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <Button onClick={() => navigate('/verify') } style={{width: '100%'}}>{t('register.apply')}</Button>
                        </Grid2>
                    </Grid2>
                </CardContent>

            </Card>
        </React.Fragment>
    )

}