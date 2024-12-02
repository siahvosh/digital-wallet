import {Button, Card, Grid2, TextField} from "@mui/material";
import React, {useState} from 'react';
import raytel from '../../Assets/raytel.svg'
import hamrahAval from '../../Assets/hamrahAval.svg'
import mtn from '../../Assets/iran.svg'
import shatel from '../../Assets/shatel.svg'


export const Credit = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [selectedIndexOp, setSelectedIndexOp] = useState<number>()
    const [selectedCredit, setSelectedCredit] = useState<number>()


    interface btnType {
        title: string;
        size: { xs: number; md: number };
        discount?: string;
        img?: any;
        imgSize?: any;
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
        { title : 'معمولی', size: {xs: 6, md: 3}, discount: '5%', img: raytel},
        { title : 'شگفت انگیز', size: {xs: 6, md: 3}, discount: '35%'},
        { title : 'بانوان', size: {xs: 6, md: 3}, discount: '30%'},
        { title : 'جوانان', size: {xs: 6, md: 3}, discount: '+ایترنت'}
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
        // setCustomPrice(value)
    };
    const handleItemClickOp = (index: number) => {
        setSelectedIndexOp(index)
        // setCustomPrice(value)
    };
    const handleItemClickCredit = (index: number) => {
        setSelectedCredit(index)
        // setCustomPrice(value)
    };

    return (
        <React.Fragment>
            <Card style={{height: '100%', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '0', right: '0.4rem'}}>شماره همراه</span>
                        <TextField style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم اپراتور؟</span>
                        </Grid2>
                        <Grid2 container spacing={1} size={12} style={{justifyContent: 'center', marginTop: '0.5rem'}}>
                            {operator.map((item, idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <div

                                        onClick={() => handleItemClickOp(idx)}
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
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم شارژ؟</span>
                        </Grid2>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '0.5rem'}}>
                                {credit.map((item, idx: number) => (
                                    <Grid2 key={idx} style={{padding: '0.5rem'}}
                                           size={{xs: item.size.xs, md: item.size.md}}>
                                        <div
                                            onClick={() => handleItemClickCredit(idx)}
                                            style={{
                                                margin: 'auto',
                                                padding: '0.7rem',
                                                cursor: 'pointer',
                                                border: selectedCredit === idx ? '3px solid #2bab84' : '1px solid gray',
                                                borderRadius: '12px',
                                                width: '100px',
                                                height: '50px',
                                            }}>
                                            {item.title} <br/>
                                            {item.discount}
                                        </div>
                                    </Grid2>
                                ))}
                            </Grid2>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>(ریال) چه مبلغی ؟</span>
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
                                        ریال
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{margin: 'auto', width: '65vw', marginTop: '2rem'}}>
                            <Button  style={{width: '100%'}}>پرداخت</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}