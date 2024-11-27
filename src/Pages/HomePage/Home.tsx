import React, {useEffect, useState} from 'react'
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
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MenuBar from '../../Component/Menu/MenuBar'
import Header from "../../Component/Header/Header";
import Wallet from "../../Component/Modals/WalletDialog/Wallet";
import {useData} from '../../Context/DataContext'
import axios from "axios";
import {Sep1000} from "../../indexHelper";

export const Home = () => {

    const { phoneNumber } = useData();
    const { setBalance } = useData()
    const { setCurrency } = useData()
    const { setWalletId } = useData()




     useEffect(() => {
       axios
            .post('http://localhost:3000/users/find', {
                phone_number: phoneNumber,
            })
            .then((res) => {
                getUserData(res.data.id)
            })

    })


    const getUserData = (id:any) => {
        axios
            .get(`http://localhost:3000/wallet?userId=${id}`)
            .then(res => {
                const value = Sep1000(res.data[0].balance)

                setBalance(value);
                setCurrency(res.data[0].currency)
                setWalletId(res.data[0].walletId)

            })
            .catch(err => console.log(err))
    }

    return (
       <React.Fragment>
           <Header/>
           <TopCard/>
           <ActionCard/>
           <MenuBar/>
           <Wallet/>
       </React.Fragment>
    )
}

const TopCard = () => {
    const { t } = useTranslation('home')
    const { setData } = useData();
    const handelShowDialog = (value: boolean) => {
        if(setData) setData(value)
    }
    const { balance } = useData()
    const { currency } = useData()

    return (
        <div className={'top-card'}>
            <Card className='account-card'>
                <CardContent>
                    <Grid2 container spacing={0.3} >
                        <Grid2 size={12} className='grid-style'>
                            <AccountBalanceWalletIcon className='icon'/>
                        </Grid2>
                        <Grid2 size={12} className='grid-style'>
                                <span style={{color: 'white'}}>
                                    {t('inventory')}
                                </span>
                        </Grid2>
                        <Grid2 size={12} className='grid-style'>
                            <span style={{color: 'white'}}> {balance} {t('actionButton.rial')} </span>
                        </Grid2>
                        <Grid2 size={12} style={{marginTop: '.3rem'}}>
                                <span style={{color: 'white'}}>
                                    <IconButton onClick={() => handelShowDialog(true)} aria-label="delete" size="small">
                                        <FullscreenIcon/>
                                    </IconButton>
                                </span>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </div>
    )
}
const ActionCard = () => {
    const { t } = useTranslation('home')
    interface actionBTnType {
        title: string;
        icon: JSX.Element;
        size: { xs: number; md: number };
    }
    const [actionBTn] = useState<actionBTnType[]>([
        { title : 'actionButton.transmission', icon: <PaymentIcon/>, size: {xs: 6, md: 3}},
        { title : 'actionButton.payment',  icon: <PaidIcon/>, size: {xs: 6, md: 3}},
        { title : 'actionButton.refund',  icon: <OutputIcon/>, size: {xs: 6, md: 3}},
        { title : 'actionButton.scan',  icon: <DocumentScannerIcon/>, size: {xs: 6, md: 3}}
    ])

    interface btnType {
        title: string;
        description: string;
        icon: JSX.Element;
        size: { xs: number; md: number };
    }
    const [btn] = useState<btnType[]>([
        { title : 'actionButton.purchaseCharge', description: 'actionButton.internetDescription', icon: <RssFeedIcon/>, size: {xs: 6, md: 6}},
        { title : 'actionButton.purchaseNet', description: 'actionButton.ChargeDescription', icon: <RssFeedIcon/>, size: {xs: 6, md: 6}},
    ])
    return (
        <div className={'bottom-card'}>
            <Card className='action-card'>
                <CardContent>
                    <Grid2 container spacing={2} style={{justifyContent: 'center'}}>
                        { btn.map((item, idx: number) => (
                            <Grid2 key={idx} style={{padding: '0.5rem'}}  size={{ xs: 6, md: 4 }}>
                                <div  className={'btn'} style={{padding: '0.7rem'}}>
                                    <Grid2 container >
                                        <Grid2 size={{xs: 12, md: 12}} container style={{justifyContent: 'center'}}>
                                            <span style={{fontSize: '1.5rem', color: 'black'}}>{t(`${item.title}`)}</span>
                                            <PaymentIcon className={'payment-icon'} />
                                        </Grid2>
                                        <Grid2 size={12}  sx={{display: { xs: 'none', md: 'flex' } }}>
                                            <span style={{justifyContent: 'center', color: 'black'}}>{t(`${item.description}`)}</span>
                                        </Grid2>
                                    </Grid2>
                                </div>
                            </Grid2>
                        )) }
                    </Grid2>
                    <Grid2 container spacing={2} style={{justifyContent: 'center', marginTop: '1rem'}}>
                        {actionBTn.map((item , idx: number) => (
                            <Grid2 key={idx} style={{padding: '0.5rem'}} size={{ xs: item.size.xs, md: item.size.md }}>
                                <Button variant={"outlined"} className={'btn'} style={{padding: '0.7rem'}}>
                                    {item.icon}
                                </Button> <br/>
                                <span> {t(`${item.title}`)} </span>
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
    )
}