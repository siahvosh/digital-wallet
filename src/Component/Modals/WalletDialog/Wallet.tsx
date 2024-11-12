import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import {useEffect, useState} from "react";
import {Card, Grid2} from "@mui/material";
import './Wallet.css'
import {useData} from "../../../DataContext";
import {useTranslation} from "react-i18next";
import LottieAnimation from "../../../Lottie/LottieAnimation";
import wallet from './../../../Lottie/Wallet.json';
import addToWallet from './../../../Lottie/AddToWallet.json';
import {useLocation, useNavigate} from "react-router-dom";
import {BalanceCard} from "../../BalanceCard/BalanceCard";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Wallet = () => {
    // const [open, setOpen] = useState<boolean>(false);

    const { data } = useData();
    const { setData } = useData();
    //
    //
    // useEffect(() => {
    //     setOpen(data)
    // },[data])

    const handleClose = () => {
        if(setData)
            setData(false);
    };

    return (
        <React.Fragment>
            <BootstrapDialog
                fullScreen
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={data}
            >
                <Card style={{height: '100%',}}>

                     <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                         <Grid2 container size={12} spacing={1} className={'content'}>
                             <BalanceCard closeModal={handleClose}/>
                         </Grid2>
                         <Grid2 container size={12} spacing={3} className={'action-container'}>
                             <Option/>
                         </Grid2>
                     </Grid2>
                </Card>
            </BootstrapDialog>
        </React.Fragment>
    );
}

const Option = () => {
    interface btnType {
        title: string;
        description: string;
        titleClassName: string;
        dcClassName: string,
        animation: any,
        animationSize: object,
        path: string
    }
    const [btn] = useState<btnType[]>([
        {
            title: 'option1.title',
            description: 'option1.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title',
            animation: wallet,
            animationSize: {
                width: 120,
                height: 120
            },
            path: '/transfer'
        },
        {
            title: 'option2.title',
            description: 'option2.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title',
            animation: addToWallet,
            animationSize: {
                width: 180,
                height: 180
            },
            path: '/add'

        },
        {
            title: 'option3.title',
            description: 'option3.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title',
            animation: '',
            animationSize: {
                width: 150,
                height: 150
            },
            path: '/refund'

        },
    ])
    const {t} = useTranslation('walletModal')
    const navigate = useNavigate()

    return (
        <React.Fragment>
            {btn.map((item, idx) => (
                <Grid2 key={idx} size={12}>
                    <div className={'option btn'} onClick={() => navigate(`${item.path}`)}>
                        <Grid2 spacing={0} container size={12}>
                            <Grid2 size={12}>
                                <span className={item.titleClassName}>{t(`${item.title}`)}</span><br/>
                                <span className={item.dcClassName}>{t(`${item.description}`)}</span>
                            </Grid2>
                            {/*<Grid2 size={6}>*/}
                            {/*    <LottieAnimation animationSize={item.animationSize} />*/}
                            {/*</Grid2>*/}
                        </Grid2>
                    </div>
                </Grid2>
            ))}
        </React.Fragment>
    )
}


export default Wallet;