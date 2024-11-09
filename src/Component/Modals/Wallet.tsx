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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

interface WalletProps {
    open: boolean;
}
const Wallet : React.FC<WalletProps> = (props) => {
    const [open, setOpen] = useState<boolean>(false);



    useEffect(() => {
        setOpen(props.open)
    },[props.open])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Open dialog*/}
            {/*</Button>*/}
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
                    <Grid2  alignContent="center" justifyContent="center" container size={12} spacing={0} style={{height: '100%'}}>
                        <Grid2 size={12}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <span style={{fontSize: '6rem', fontWeight: '600'}}>Inventory</span> <br/>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <span style={{fontSize: '2.5rem', fontWeight: '600'}}>20.000.000 Rials</span>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <IconButton style={{marginTop: '5rem'}} className={'btn'} onClick={handleClose} aria-label="delete" size="small">
                                <FullscreenIcon/>
                            </IconButton>
                        </Grid2>
                    </Grid2>
                </DialogContent>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}


export default Wallet;