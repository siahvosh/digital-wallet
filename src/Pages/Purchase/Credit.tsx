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
    }
    interface priceItemsType {
        price: string;
    }

    const [operator] = useState<btnType[]>([
        { title : 'همراه اول', size: {xs: 6, md: 3}, img: hamrahAval},
        { title : 'ایرانسل', size: {xs: 6, md: 3}, img: mtn},
        { title : 'شاتل', size: {xs: 6, md: 3}, img: shatel},
        { title : 'رایتل', size: {xs: 6, md: 3}, img: raytel}
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
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم اپراتور؟</span>
                        </Grid2>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '1rem'}}>
                            {operator.map((item, idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <div
                                        onClick={() => handleItemClickOp(idx)}
                                        style={{
                                            padding: '0.7rem',
                                            border: '1px solid green',
                                            borderRadius: '12px',
                                            width: '100px',
                                            height: '50px',
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: '70px',
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
                        <Grid2 size={12}>
                            <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '1rem'}}>
                                {credit.map((item, idx: number) => (
                                    <Grid2 key={idx} style={{padding: '0.5rem'}}
                                           size={{xs: item.size.xs, md: item.size.md}}>
                                        <Button onClick={() => handleItemClickCredit(idx)}
                                                className={selectedCredit === idx ? 'active-items' : 'btn'}
                                                variant={"outlined"}
                                                style={{padding: '0.7rem', width: '100px'}}>
                                            {item.title} <br/>
                                            {item.discount}
                                        </Button>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Grid2>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>(ریال) چه مبلغی ؟</span>
                        </Grid2>

                        <Grid2 size={12} container style={{
                            justifyContent: 'center',
                            display: 'center',
                            width: '90%',
                            margin: 'auto',
                            alignContent: 'center',
                            marginTop: '1rem'
                        }}>
                            {priceItems.map((item, index) => (
                                <Grid2 key={index} size={{xs: 6, md: 2, lg: 2}} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                    <div className={selectedIndex === index ? 'active-items' : 'btn'}
                                         onClick={() => handleItemClick(item.price, index)} style={{
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        width: '80px',
                                    }}>
                                        {item.price}
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{margin: 'auto', width: '65vw', marginTop: '3rem'}}>
                            <Button  style={{width: '100%'}}>زمهزن</Button>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Card>
        </React.Fragment>
    )
}