import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import React, {useContext, useEffect, useState} from "react";
import imageUrl from "../../../Assets/success.png"
import unsuccessImg from "../../../Assets/unsuccess.png"
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
    const {callbackStatus, amount, cardNumber, showCallback, setCallbackStatus} = useData()
    const handleClose = () => {
        setCallbackStatus(false);
        setOpen(false);
    };
    useEffect(() => {
        setOpen(showCallback)
    }, [showCallback])


    interface statusType {
        status: string;
        title: string;
        description: string;
        img: any
    }

    const [statusList] = useState<statusType[]>(
        [
            {status: 'transfer', title: 'انتقال با موفقیت انجام شد', description: `ملبغ ${amount} ریال از کیف شما به حساب ${cardNumber} واریز شد`, img: imageUrl},
            {status: 'add', title: 'کیف پول با موفقیت شارژ شد', description: `کیف پول شما به مبلغ ${amount} ریال شارژ شد`, img: imageUrl},
            {status: 'refund', title: 'برداشت با موفقیت انجام شد', description: `مبلغ  ${amount} ریال از کیف پول شما برداشت شد` , img: imageUrl},
            {status: 'failed', title: 'عملیات ناموق بود', description: 'متاسفانه عملیات اتجام نشد لطفا مجدد تلاش کنید', img: unsuccessImg},

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
                                    image={item.img}
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
                                <CardActions>
                                    <Button size={'small'} onClick={handleClose} style={{marginTop: '1rem', width: '100%', margin: 'auto'}} color="primary">متوجه شدم</Button>
                                </CardActions>
                            </React.Fragment>

                ))}
            </Card>

        </BootstrapDialog>
    )
}