import React from 'react'
import {Button, Card, CardContent, Grid2, IconButton} from "@mui/material";
import "./Home.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PaymentIcon from '@mui/icons-material/Payment';

export const Home = () => {
    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%)', height: '2rem'}}>
                <div style={{justifyContent: 'end', display: 'flex'}}>
                    <div style={{color: 'black'}} className='logo'/>
                </div>
            </Card>
            <Card className='account-card'>
                    <CardContent>
                        <Grid2 container spacing={0.3}>
                            <Grid2 size={12} className='grid-style'>
                                <AccountBalanceWalletIcon className='icon'/>
                            </Grid2>
                            <Grid2 size={12} className='grid-style'>
                               <span style={{color: 'white'}}>
                                    موجودی نقدی
                               </span>
                            </Grid2>
                            <Grid2 size={12} className='grid-style'>
                               <span style={{color: 'white'}}>
                                  (20.000.000 Rial)
                               </span>
                            </Grid2>
                            <Grid2 size={12} style={{marginTop: '.3rem'}}>
                               <span style={{color: 'white'}}>
                                   <IconButton aria-label="delete" size="small">
                                     <FullscreenIcon/>
                                   </IconButton>
                               </span>
                            </Grid2>
                        </Grid2>

                    </CardContent>
                </Card>
            <Card className='action-card'>
                <CardContent>
                    <Grid2 container spacing={2}>
                        <Grid2 style={{padding: '0.5rem'}}  size={4}>
                            <Button variant={"outlined"} style={{padding: '0.7rem'}}>
                                <span>خرید شارژ</span>
                                <PaymentIcon/>
                            </Button>
                        </Grid2>
                        <Grid2 style={{padding: '0.5rem'}}  size={4}>
                            <Button variant={"outlined"} style={{padding: '0.7rem'}}>
                                <span>خرید شارژ</span>
                                <PaymentIcon/>
                            </Button>
                        </Grid2>
                        <Grid2 style={{padding: '0.5rem'}}  size={4}>
                            <Button variant={"outlined"} style={{padding: '0.7rem'}}>
                                <span>خرید شارژ</span>
                                <PaymentIcon/>
                            </Button>


                        </Grid2>

                    </Grid2>

                </CardContent>
            </Card>

        </React.Fragment>
    )

}