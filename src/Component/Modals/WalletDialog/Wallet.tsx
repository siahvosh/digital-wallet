import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {useEffect, useState} from "react";
import {Card, Grid2} from "@mui/material";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import './Wallet.css'
import {useData} from "../../../DataContext";
import {useTranslation} from "react-i18next";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Wallet = () => {
    const {t} = useTranslation('walletModal')
    const [open, setOpen] = useState<boolean>(false);

    const { data } = useData();
    const { setData } = useData();

    useEffect(() => {
        setOpen(data)
    },[data])

    const handleClose = () => {
        setData(false);
    };


    return (
        <React.Fragment>
            <BootstrapDialog
                fullScreen
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Card style={{height: '100%',}}>
                     <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                         <Grid2 container size={12} spacing={1} className={'content'}>
                             <Grid2 size={12}>
                                 <div style={{justifyContent: 'center', display: 'flex'}}>
                                     <span className={'title-style'}>Inventory</span> <br/>
                                 </div>
                             </Grid2>
                             <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                                 <span className={'inventory-style'}>20.000.000 Rials</span>
                             </Grid2>
                             <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                                 <IconButton className={'btn'} onClick={handleClose} aria-label="delete" size="small">
                                     <FullscreenExitIcon/>
                                 </IconButton>
                             </Grid2>
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
        dcClassName: string
    }

    const [btn] = useState<btnType[]>([
        {
            title: 'option1.title',
            description: 'option1.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title'
        },
        {
            title: 'option2.title',
            description: 'option2.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title'
        },
        {
            title: 'option2.title',
            description: 'option2.description',
            titleClassName: 'btn-title',
            dcClassName: 'dc-title'
        },
    ])

    const {t} = useTranslation('walletModal')

    return (
        <React.Fragment>
            {btn.map((item, idx) => (
                <Grid2 key={idx} size={12}>
                    <div className={'option btn'}>
                        <span className={item.titleClassName}>{t(`${item.title}`)}</span><br/>
                        <span className={item.dcClassName}>{t(`${item.description}`)}</span>
                    </div>
                </Grid2>
            ))}
        </React.Fragment>

    )
}
export default Wallet;