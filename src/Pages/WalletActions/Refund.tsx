import * as React from 'react'
import {Button, Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import i18n from "../../i18next";
import {useEffect, useState} from "react";
import {convertToInt, Sep1000} from "../../indexHelper";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useData} from "../../Context/DataContext";
import {useNavigate} from "react-router-dom";

export const Refund = () => {
    const { t } = useTranslation('transfer');
    const navigate = useNavigate();

    const [customPrice, setCustomPrice] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)
    const [cardNumber, setCardNumber] = useState<string>('')
    const {walletId} = useData()
    const { setData } = useData();

    const handelCustomPrice = (value: any) => {
        Sep1000(value)
        setCustomPrice(Sep1000(value))
    }

    useEffect(() => {
        if (cardNumber.length !== 16 || customPrice.length < 7)
            setDisabled(true)
        if(cardNumber.length === 16 && customPrice.length >= 7)
            setDisabled(false)
    }, [cardNumber, customPrice])

    const refund = () => {

        const amount = convertToInt(customPrice)
        axios
            .patch('http://localhost:3000/wallet/refund', {
                walletId: walletId,
                amount: amount,
                cardNumber: cardNumber,
            })
            .then(res => {
                if(setData)
                    setData(false)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <React.Fragment>
            <Card style={{height: '100%'}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard title={t('refund.refundBtn')}/>
                    </Grid2>
                </Grid2>
                <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={3} className={'action-container'}>
                    <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                        <span>اطلاعات مورد نظر وارد کنید.</span>
                    </Grid2>
                    <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                        <div style={{
                            borderRadius: '8px',
                            width: '65vw',
                            height: '3rem',
                            justifyContent: 'space-between',
                            margin: 'auto',
                            alignContent: 'center'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TextField
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            left: i18n.language === 'fa' ? 'auto' : 0,
                                        },
                                    }}
                                    onChange={(e) => handelCustomPrice(e.target.value)}
                                    variant={'standard'}
                                    style={{width: '100%'}} value={customPrice} label={t('transfer.customPrice')}/>
                            </div>
                        </div>
                    </Grid2>
                        <div style={{
                            width: '65vw',
                            height: '3rem',
                            justifyContent: 'space-between',
                            margin: 'auto',
                            alignContent: 'center'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TextField
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            left: i18n.language === 'fa' ? 'auto' : 0,
                                        },
                                    }}
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    variant={'standard'}
                                    style={{width: '100%'}}
                                    label={t('transfer.numberCard')}/>
                            </div>
                        </div>
                    <Grid2 size={12} style={{margin: 'auto', width: '65vw'}}>
                        <Button onClick={refund} disabled={disabled} style={{width: '100%'}}>{t('refund.refundBtn')}</Button>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}
