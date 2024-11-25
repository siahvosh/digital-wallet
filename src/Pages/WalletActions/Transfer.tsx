import * as React from 'react'
import {Button, Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import i18n from "../../i18next";

export const Transfer = () => {
    interface priceItemsType {
        price: string;
        num: string
    }
    const [priceItems] = useState<priceItemsType[]>([
        {price: '100,000', num: '1'},
        {price: '200,000', num: '2'},
        {price: '300,000', num: '3'},
        {price: '500,000', num: '4'},
        {price: '1,000,000', num: '5'},
        {price: '2,000,000', num: '6'},
    ])
    const [customPrice, setCustomPrice] = useState<string>('')
    const [curdNumber, setCurdNumber] = useState<string>('')

    return(
        <React.Fragment>
            <Card style={{height: '100%',}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard/>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={3} className={'action-container'}>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{width: '65vw', height: '3rem',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <TextField
                                        sx={{
                                            '& .MuiInputLabel-root': {
                                                left: i18n.language === 'fa' ? 'auto' : 0,
                                            },
                                        }}
                                        value={curdNumber}
                                        onChange={(e) => setCurdNumber(e.target.value)}
                                        variant={'standard'}
                                        style={{width: '100%'}}
                                        label={'کارت مقصد'}/>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{width: '65vw', height: '3rem',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'end'}}>
                                    <PeopleIcon/>
                                    <span style={{alignContent: 'center'}}>مخاطبین</span>
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
                                        onChange={(e) => setCustomPrice(e.target.value)}
                                        variant={'standard'}
                                        style={{width: '100%'}} value={customPrice} label={'مبلغ دلخواه (ریال) '}/>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} container style={{justifyContent: 'center', display: 'center', width: '65vw', margin: 'auto', alignContent: 'center'}}>
                            <Grid2 size={12}>
                                <span style={{display: 'flex', justifyContent: 'start'}}>مبلغ پیشنهادی (ریال)</span>
                            </Grid2>

                            {priceItems.map((item, index) => (
                                <Grid2 size={{ xs: 12, md: 4, lg: 4}}>
                                    <div onClick={() => setCustomPrice(item.price)} style={{
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        border: '2px solid gray',
                                        padding: '1rem'
                                    }}>
                                        {item.price}
                                    </div>
                                </Grid2>
                            ))}


                        </Grid2>
                        <Grid2 size={8}  style={{margin: 'auto'}}>
                            <Button style={{width: '100%'}}>انتقال</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}

