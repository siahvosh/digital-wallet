import * as React from 'react'
import {Button, Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import i18n from "../../i18next";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {convertToInt, Sep1000} from "../../indexHelper";
import axios from "axios";
import {useData} from "../../Context/DataContext";
import {useNavigate} from "react-router-dom";


export const AddMoney = () => {
    const { t } = useTranslation('transfer');
    const navigate = useNavigate()
    const { setData } = useData();


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
    const [disabled, setDisabled] = useState<boolean>(true)
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const {walletId} = useData()


    const handleItemClick = (value: string, index: number) => {
        setSelectedIndex(index)
        setCustomPrice(value)
    };
    const handelCustomPrice = (value: any) => {
        Sep1000(value)
        setCustomPrice(Sep1000(value))
        setSelectedIndex(-1)
    }

    useEffect(() => {
       customPrice.length < 7 ? setDisabled(true) : setDisabled(false)
    }, [customPrice])


    const addFound = () => {

        const amount = convertToInt(customPrice)
        axios
            .patch('http://localhost:3000/wallet/add', {
                walletId: walletId,
                amount: amount
            })
            .then(res => {
                if (setData)
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
                        <BalanceCard title={t('addMoney.add')}/>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={3} className={'action-container'}>
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
                            <Grid2 size={12}>
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
                        <Grid2 size={12}  style={{margin: 'auto', width: '65vw'}}>
                            <Button onClick={addFound} disabled={disabled} style={{width: '100%'}}>{t('addMoney.add')}</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}

