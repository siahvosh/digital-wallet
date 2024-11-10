import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {Grid2} from "@mui/material";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullscreenIcon from "@mui/icons-material/Fullscreen";
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
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers style={{background: '#2bab84'}}>
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
                                <span style={{fontSize: '6rem', fontWeight: '600'}}>Inventory</span> <br/>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <span style={{fontSize: '2.5rem', fontWeight: '600'}}>20.000.000 Rials</span>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <IconButton style={{marginTop: '3rem'}} className={'btn'} onClick={handleClose} aria-label="delete" size="small">
                                <FullscreenIcon/>
                            </IconButton>
                        </Grid2>
                    </Grid2>
                </DialogContent>
                <DialogContent dividers style={{borderTopRightRadius: '50px !important'}}>
                   <Grid2 alignContent="center" justifyContent="center" container size={12} spacing={3} style={{height: '100%'}}>
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