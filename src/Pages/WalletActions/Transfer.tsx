import * as React from 'react'
import {Button, Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import i18n from "../../i18next";
import './Items.css'
import sep1000, {convertToInt, Sep1000} from "../../indexHelper";
import {useTranslation} from "react-i18next";
import {useData} from "../../Context/DataContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Transfer = () => {
    const { t } = useTranslation('transfer');
    const navigate = useNavigate();

    interface priceItemsType {
        price: string;
    }
    const [priceItems] = useState<priceItemsType[]>([
        {price: '100,000'},
        {price: '200,000'},
        {price: '300,000'},
        {price: '500,000'},
        {price: '1,000,000'},
        {price: '2,000,000'},
    ])
    const [customPrice, setCustomPrice] = useState<string>('')
    const [cardNumber, setCardNumbers] = useState<string>('')
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [disabled, setDisabled] = useState<boolean>(true)
    const {walletId} = useData()
    const {setData, setCardNumber, setAmount, setCallbackStatus} = useData()

    const handleItemClick = (value: string, index: number) => {
        setSelectedIndex(index)
        setCustomPrice(value)
    };
    const handelCustomPrice = (value: any) => {
        Sep1000(value)
        setCustomPrice(Sep1000(value))
        setSelectedIndex(-1)
    }
    const handelCardNumber = (value: any) => {
        setCardNumbers(value)
    }

    useEffect(() => {
     if (cardNumber.length !== 16 || customPrice.length < 7)
         setDisabled(true)
     if(cardNumber.length === 16 && customPrice.length >= 7)
         setDisabled(false)
    }, [cardNumber, customPrice])

    const transfer = () => {
        const amount = convertToInt(customPrice)
        console.log(cardNumber)
        axios
            .patch('http://localhost:3000/wallet/transfer', {
                walletId: walletId,
                amount: amount,
                cardNumber: cardNumber,

            })
            .then(res => {
                if (setData)
                    setData(false)
                setCallbackStatus('transfer')
                setAmount(customPrice)
                setCardNumber(cardNumber)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <React.Fragment>
            <Card style={{height: '100%',}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard title={t('transfer.transfer')}/>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{width: '65vw', height: '3rem',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <TextField
                                        sx={{
                                            '& .MuiInputLabel-root': {
                                                left: i18n.language === 'fa' ? 'auto' : 0,
                                            },
                                        }}
                                        value={cardNumber}
                                        onChange={(e) => handelCardNumber(e.target.value)}
                                        variant={'standard'}
                                        style={{width: '100%'}}
                                        label={t('transfer.numberCard')}/>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{width: '65vw', height: '3rem',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'end'}}>
                                    <PeopleIcon/>
                                    <span style={{alignContent: 'center'}}>{t('transfer.contacts')}</span>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{borderRadius: '8px' ,width: '65vw', height: '3rem', justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
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
                        <Grid2 size={12} container style={{justifyContent: 'center', display: 'center', width: '65vw', margin: 'auto', alignContent: 'center'}}>
                            <Grid2  size={12}>
                                <span style={{display: 'flex', justifyContent: 'start'}}>{t('transfer.customPriceLabel')}</span>
                            </Grid2>
                                {priceItems.map((item, index) => (
                                <Grid2 key={index} size={{ xs: 12, md: 4, lg: 4}}>
                                    <div className={selectedIndex === index ? 'active-items' : 'btn'} onClick={() => handleItemClick(item.price, index)} style={{
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                    }}>
                                        {item.price}
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{margin: 'auto', width: '65vw'}}>
                            <Button onClick={transfer} disabled={disabled} style={{width: '100%'}}>{t('transfer.transfer')}</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}

