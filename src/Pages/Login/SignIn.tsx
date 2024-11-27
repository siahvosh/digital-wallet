import React, {useState} from 'react'
import {Button, Card, CardContent, CardMedia, Grid2, Link, TextField} from "@mui/material";
import i18n from "../../i18next";
import changeLanguage from "../../indexHelper";
import rbImage from "../../Assets/Tablet login-cuate.png";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useData} from "../../Context/DataContext";


export const SignIn = () => {
    const [imageUrl] = useState<any>(rbImage);
    const navigate = useNavigate()
    const { t } = useTranslation('login')
    const [disable, setDisable] = useState<boolean>(true)
    const [phone, SetPhone] = useState<string>('')
    const [password, SetPassword] = useState<string>('')
    const { setPhoneNumber } = useData();


    const handelInputNumber = (e: string) => {
        setDisable( e.length < 11 || e.length > 11 ? true : false)
        SetPhone(e)
    }

    const handelInputPassword = (e: string) => {
        SetPassword(e)
    }

    const login = () => {
        axios
            .post('http://localhost:3000/auth/login', {
                phone_number: phone,
                password: password,
            })
            .then((res) => {
                localStorage.setItem('accessToken', res.data.access_token)
                localStorage.setItem('phone-number', phone)
                setPhoneNumber(phone)
                navigate('/');
            })
            .catch((error) => {
                console.error('Error during login:', error.response?.data || error.message);
            });
    };

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
                        left: i18n.language === 'en' ? '0.7rem': '',
                        right: i18n.language === 'fa' ? '0.7rem': '',
                        border: '1px solid white'}}
                    onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}

                >
                    {t('login.language')}
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
                            <span style={{fontSize: '1.5rem', fontWeight: '500'}}> {t('login.title')} </span>
                        </Grid2>
                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <TextField sx={{
                                '& .MuiInputLabel-root': {
                                    left: i18n.language === 'fa' ? 'auto' : 0,
                                },
                            }} onChange={(e) => handelInputNumber(e.target.value)}  label={t('login.phoneNumber')}  variant={"standard"} style={{width: '100%'}}/>
                        </Grid2>
                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <TextField sx={{
                                '& .MuiInputLabel-root': {
                                    left: i18n.language === 'fa' ? 'auto' : 0,
                                },
                            }} onChange={(e) => handelInputPassword(e.target.value)} type={"password"} label={t('login.password')} variant={"standard"} style={{width: '100%'}}/>
                        </Grid2>

                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <Button disabled={disable} onClick={login} style={{width: '100%'}}>{t('login.apply')}</Button>
                        </Grid2>
                        <Grid2 size={8} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                            <Link href='/register'>{t('login.noAcc')}</Link>
                        </Grid2>
                    </Grid2>
                </CardContent>

            </Card>
        </React.Fragment>
    )

}