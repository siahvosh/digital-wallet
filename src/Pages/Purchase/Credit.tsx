import {Button, Card, Grid2, TextField} from "@mui/material";
import React, {useState} from 'react';
import raytel from '../../Assets/raytel.svg'
import hamrahAval from '../../Assets/hamrahAval.svg'
import mtn from '../../Assets/iran.svg'
import shatel from '../../Assets/shatel.svg'
import {useTranslation} from "react-i18next";
import axios from "axios";


export const Credit = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [selectedIndexOp, setSelectedIndexOp] = useState<number>()
    const [selectedCredit, setSelectedCredit] = useState<number>()
    const [price, setPrice] = useState<string>()
    const [creditValue, setCreditValue] = useState<string>()

    const { t } = useTranslation('credit')


    interface btnType {
        title: string;
        size: { xs: number; md: number };
        discount?: any;
        img?: any;
        imgSize?: any;
        label?: any;
    }
    interface priceItemsType {
        price: string;
    }

    const [operator] = useState<btnType[]>([
        { title : 'همراه اول', size: {xs: 6, md: 3}, img: hamrahAval, imgSize: '50px'},
        { title : 'ایرانسل', size: {xs: 6, md: 3}, img: mtn, imgSize: '70px'},
        { title : 'شاتل', size: {xs: 6, md: 3}, img: shatel, imgSize: '70px'},
        { title : 'رایتل', size: {xs: 6, md: 3}, img: raytel, imgSize: '70px'}
    ])

    const [credit] = useState<btnType[]>([
        {label: 'همراه اول', title : 'credit.normal.title', size: {xs: 6, md: 3}, discount: 'credit.normal.description'},
        {label: 'ایرانسل', title : 'credit.special.title', size: {xs: 6, md: 3}, discount: 'credit.special.description'},
        {label: 'شاتل', title : 'credit.women.title', size: {xs: 6, md: 3}, discount: 'credit.women.description'},
        {label: 'رایتل', title : 'credit.teenager.title', size: {xs: 6, md: 3}, discount: 'credit.teenager.description'}
    ])
    const [priceItems] = useState<priceItemsType[]>([
        {price: '10,000'},
        {price: '50,000'},
        {price: '100,000'},
        {price: '200,000'},
        {price: '500,000'},
        {price: '1,000,000'},
    ])

    const handleItemClick = (value: string, index: number) => {
        setSelectedIndex(index)
        setPrice(value)

    };
    const handleItemClickOp = (value: string, index: number) => {
        setSelectedIndexOp(index)
    };
    const handleItemClickCredit = (value: string, index: number) => {
        setSelectedCredit(index)
        setCreditValue(value)
    };

    const payment = () => {
        axios
            .patch('http://localhost:3000/wallet/credit', {
                amount: price,
                creditType: creditValue,
            })
    }

    return (
        <React.Fragment>
            <Card style={{height: '100%', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '0', right: '0.4rem'}}>{t('label.phoneNumber')}</span>
                        <TextField style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.operator')}</span>
                        </Grid2>
                        {creditValue}
                        {price}
                        <Grid2 container spacing={1} size={12} style={{justifyContent: 'center', marginTop: '0.5rem'}}>
                            {operator.map((item, idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <div
                                        onClick={() => handleItemClickOp(item.title, idx)}
                                        style={{
                                            margin: 'auto',
                                            padding: '0.7rem',
                                            cursor: 'pointer',
                                            border: selectedIndexOp === idx ? '3px solid #2bab84': '1px solid gray',
                                            borderRadius: '12px',
                                            width: '100px',
                                            height: '50px',
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: `${item.imgSize}`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                    }}>

                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.credit')}</span>
                        </Grid2>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '0.5rem'}}>
                                {credit.map((item, idx: number) => (
                                    <Grid2 key={idx} style={{padding: '0.5rem'}}
                                           size={{xs: item.size.xs, md: item.size.md}}>
                                        <div
                                            onClick={() => handleItemClickCredit(item.label, idx)}
                                            style={{
                                                margin: 'auto',
                                                padding: '0.7rem',
                                                cursor: 'pointer',
                                                border: selectedCredit === idx ? '3px solid #2bab84' : '1px solid gray',
                                                borderRadius: '12px',
                                                width: '100px',
                                                height: '50px',
                                            }}>
                                            {t(item.title)} <br/>
                                            {t(item.discount)}
                                        </div>
                                    </Grid2>
                                ))}
                            </Grid2>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.price')}</span>
                        </Grid2>
                        <Grid2 size={12} container style={{width: '90%', margin: 'auto', alignContent: 'center', marginTop: '0.5rem'}}>
                            {priceItems.map((item, index) => (
                                <Grid2 key={index} size={{xs: 6, md: 2, lg: 2}} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                    <div onClick={() => handleItemClick(item.price, index)} style={{
                                       cursor: 'pointer',
                                       borderRadius: '12px',
                                       border: selectedIndex === index ? '3px solid #2bab84' : '1px solid gray',
                                       padding: '1rem',
                                       width: '100px',
                                       height: '50px',
                                    }}>
                                        {item.price} <br/>
                                        {t('currency')}
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{margin: 'auto', width: '65vw', marginTop: '2rem'}}>
                            <Button onClick={payment}  style={{width: '100%'}}>{t('btn')}</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}