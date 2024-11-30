import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import React, {useContext, useState} from "react";
import imageUrl from "../../../Assets/success.png"
import {useData} from "../../../Context/DataContext";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const Callback = () => {

    const [open, setOpen] = useState(true);
    const {callbackStatus} = useData()
    const handleClose = () => {
        setOpen(false);
    };

    interface statusType {
        status: string;
        title: string;
        description: string;
    }

    const [statusList] = useState<statusType[]>(
        [
            {status: 'transfer', title: 'انتقال با موفقیت انجام شد', description: 'ملبغ 100.000 ریال از کیف شما به حساب 5044456263980238 واریز شد'},
            {status: 'add', title: 'کیف پول با موفقیت شارژ شد', description: 'کیف پول شما به مبلغ 100.000 ریال شارژ شد'},
            {status: 'refund', title: 'برداشت با موفقیت انجام شد', description: 'مبلغ 100.000 ریال از کیف پول شما برداشت شد'},

        ]
    )

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <Card style={{height: '30rem', width: '30rem'}}>
                {statusList
                    .filter(item => item.status === callbackStatus)
                    .map((item, index) => (
                            <React.Fragment key={index}>
                                <CardMedia
                                    component="img"
                                    image={imageUrl}
                                    alt="Paella dish"
                                    style={{height: '70%', width: '70%', margin: 'auto'}}
                                />
                                <CardContent>
                                    <span style={{display: 'flex', justifyContent: 'center', fontWeight: '700'}}>{item.title}</span>
                                    <span style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        fontWeight: '300',
                                        textAlign: 'center',
                                        marginTop: '0.5rem'
                                    }}>{item.description}</span>
                                </CardContent>
                                <CardActions style={{position: 'absolute', bottom: '0', right: '0'}}>
                                    <Button size={'small'} onClick={handleClose} color="primary">متوجه شدم</Button>
                                </CardActions>
                            </React.Fragment>

                ))}
            </Card>

        </BootstrapDialog>
    )
}