import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {useEffect, useState} from "react";
import {Grid2} from "@mui/material";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import './Wallet.css'
import {useData} from "../../../DataContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Wallet = () => {
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
                <DialogContent dividers className={'actions-content'}>
                    <Grid2
                        alignContent="center"
                        justifyContent="center"
                        container
                        size={12}
                        spacing={0}
                        className={'pattern'}
                        style={{height: '100%'}}
                    >
                        <Grid2 size={12}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <span className={'title-style'}>Inventory</span> <br/>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <span className={'inventory-style'}>20.000.000 Rials</span>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <IconButton style={{marginTop: '3rem'}} className={'btn'} onClick={handleClose} aria-label="delete" size="small">
                                <FullscreenExitIcon/>
                            </IconButton>
                        </Grid2>
                    </Grid2>
                </DialogContent>
                <DialogContent dividers>
                   <Grid2 alignContent="center" justifyContent="center" container size={12} spacing={3} style={{height: '100%'}}>
                       <Grid2 size={12}>
                           <div className={'option btn'}>
                               <span className={'btn-title'}>Wallet to Wallet</span><br/>
                               {/*<span style={{padding: '2rem', fontSize: '1rem'}}>از کیف پول به کیف پول دیگر</span>*/}
                           </div>
                       </Grid2>
                       <Grid2 size={12}>
                           <div className={'option btn'}>
                               <span style={{padding: '2rem', fontSize: '2rem'}}>Wallet to Wallet</span><br/>
                               <span style={{padding: '2rem', fontSize: '1rem'}}>از کیف پول به کیف پول دیگر</span>
                           </div>
                       </Grid2>
                       <Grid2 size={12}>
                           <div className={'option btn'}>
                               <span style={{padding: '2rem', fontSize: '2rem'}}>Wallet to Wallet</span><br/>
                               <span style={{padding: '2rem', fontSize: '1rem'}}>از کیف پول به کیف پول دیگر</span>
                           </div>
                       </Grid2>
                   </Grid2>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}


export default Wallet;