import * as React from 'react'
import {Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

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
        {price: '3,000,000', num: '7'}
    ])
    const [customPrice, setCustomPrice] = useState<string>('')

    return(
        <React.Fragment>
            <Card style={{height: '100%',}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard/>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={3} className={'action-container'}>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{borderRadius: '8px' ,width: '65vw', height: '3rem', border: '1px solid #2bab84',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem 0 1rem'}}>
                                    <span style={{alignContent: 'center'}}>شماره مقصد را وارد کنید</span>
                                    <EditIcon/>
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
                                <Grid2>
                                    <div onClick={() => setCustomPrice(item.price)} key={index} style={{
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
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}

