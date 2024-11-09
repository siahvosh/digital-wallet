import React, {useState} from 'react'
import {Button, Card, CardContent, Grid2, IconButton} from "@mui/material";
import "./Home.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PaymentIcon from '@mui/icons-material/Payment';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PaidIcon from '@mui/icons-material/Paid';
import OutputIcon from '@mui/icons-material/Output';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "../../i18next";
import changeLanguage from "../../indexHelper";
import RssFeedIcon from '@mui/icons-material/RssFeed';
// import MuiImageSlider from "mui-image-slider";

export const Home = () => {
    const { t } = useTranslation('home')
    const [actionBTn] = useState([
        { title : t('actionButton.transmission'), icon: <PaymentIcon/>, size: {xs: 6, md: 3}},
        { title : t('actionButton.payment'), icon: <PaidIcon/>, size: {xs: 6, md: 3}},
        { title : t('actionButton.refund'), icon: <OutputIcon/>, size: {xs: 6, md: 3}},
        { title : t('actionButton.scan'), icon: <DocumentScannerIcon/>, size: {xs: 6, md: 3}}
    ])
    const [btn] = useState([
        { title : t('actionButton.purchaseCharge'), icon: <PaymentIcon/>, size: {xs: 6, md: 6}},
        { title : t('actionButton.purchaseNet'), icon: <RssFeedIcon/>, size: {xs: 6, md: 6}},
    ])

    return (
        <React.Fragment>
            <Card style={{width: 'calc(100%)', height: '2rem',}}>
                <div style={{justifyContent: 'end', display: 'flex'}}>
                    <div style={{color: 'black'}} className='logo'/>
                </div>
                <div style={{justifyContent: 'start', display: 'flex'}}>
                    <Button
                        size='small'
                        variant='outlined'
                        style={{
                            fontSize: '9px',
                            padding: '0',
                            position: 'absolute',
                            marginTop: '0.5rem',
                            left: i18n.language === 'en' ? '0.7rem': '',
                            right: i18n.language === 'fa' ? '0.7rem': '',
                            border: '1px solid white'}}
                        onClick={() => changeLanguage(  i18n.language === 'fa' ?  'en' :  'fa')}

                    >

                        {t('language')}
                    </Button>
                </div>
            </Card>
            <div className={'top-card'}>
                <Card className='account-card'>
               <CardContent>
                   <Grid2 container spacing={0.3}>
                       <Grid2 size={12} className='grid-style'>
                           <AccountBalanceWalletIcon className='icon'/>
                       </Grid2>
                       <Grid2 size={12} className='grid-style'>
                           <span style={{color: 'white'}}>
                               {t('inventory')}
                           </span>
                       </Grid2>
                       <Grid2 size={12} className='grid-style'>
                           <span style={{color: 'white'}}> 20.000.000 {t('actionButton.rial')}</span>
                       </Grid2>
                       <Grid2 size={12} style={{marginTop: '.3rem'}}>
                           <span style={{color: 'white'}}>
                               <IconButton aria-label="delete" size="small"><FullscreenIcon/>
                               </IconButton>
                           </span>
                       </Grid2>
                   </Grid2>
               </CardContent>
            </Card>
            </div>
            <div className={'bottom-card'}>
                <Card className='action-card'>
                    <CardContent>
                       <Grid2 container spacing={2} style={{justifyContent: 'center'}}>
                           { btn.map((item, idx) => (
                               <Grid2 style={{padding: '0.5rem'}}  size={{ xs: 6, md: 4 }}>
                                   <div  className={'btn'} style={{padding: '0.7rem'}}>
                                       <Grid2 container >
                                           <Grid2 size={{xs: 12, md: 12}} container style={{justifyContent: 'center'}}>
                                               <span style={{fontSize: '1.5rem', color: 'black'}}>{item.title}</span>
                                               <PaymentIcon className={'payment-icon'} />
                                           </Grid2>
                                           <Grid2 size={12}  sx={{display: { xs: 'none', md: 'flex' } }}>
                                             <span style={{justifyContent: 'center', color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque est magnam temporibus.</span>
                                           </Grid2>
                                       </Grid2>
                                   </div>
                               </Grid2>
                           )) }
                       </Grid2>
                       <Grid2 container spacing={2} style={{justifyContent: 'center', marginTop: '2rem'}}>
                           {actionBTn.map((item , idx) => (
                               <Grid2  style={{padding: '0.5rem'}} size={{ xs: item.size.xs, md: item.size.md }}>
                                   <Button variant={"outlined"} className={'btn'} style={{padding: '0.7rem'}}>
                                       {item.icon}
                                   </Button> <br/>
                                   <span> {item.title} </span>
                               </Grid2>
                           ))}

                       </Grid2>
                        <Grid2 container size={12}  style={{justifyContent: 'center', marginTop: '1rem'}}>
                       <div className={'img-card'}>
                           {/*<div style={{width: '100%', height: '100%', background: 'black', opacity: '60%'}} >*/}
                           {/*  <span style={{ fontSize: '100px', fontWeight: '800', color:"white"}}>invite firends</span>*/}
                           {/*</div>*/}
                       </div>
                   </Grid2>
                    </CardContent>
                </Card>
            </div>
            <Card style={{width: 'calc(100%)', height: '2.7rem', border : '1px solid gray',bottom: '0', position: 'fixed'}}>
                <div style={{justifyContent: 'end', display: 'flex'}}>
                    <div style={{color: 'black'}} className='logo'/>
                </div>
            </Card>
        </React.Fragment>
    )
}