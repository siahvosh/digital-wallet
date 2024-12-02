import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import React, {useContext, useEffect, useState} from "react";
import imageUrl from "../../../Assets/success.png"
import unsuccessImg from "../../../Assets/unsuccess.png"
import {useData} from "../../../Context/DataContext";
import {useTranslation} from "react-i18next";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const Callback = () => {
    const { t } = useTranslation('callback');

    const [open, setOpen] = useState(true);
    const {callbackStatus, amount, cardNumber, showCallback, setCallbackStatus, phoneNumber} = useData()
    const handleClose = () => {
        setCallbackStatus(false);
        setOpen(false);
    };
    useEffect(() => {
        setOpen(showCallback)
    }, [showCallback])

    console.log({alooooooooooo3454: open})
    interface statusType {
        status: string;
        title: string;
        description: string;
        img: any
    }

    const [statusList] = useState<statusType[]>(
        [
            {status: 'transfer', title: 'callback.transfer.title', description: 'callback.transfer.description', img: imageUrl},
            {status: 'add', title: 'callback.add.title', description: 'callback.add.description', img: imageUrl},
            {status: 'refund', title: 'callback.refund.title', description: 'callback.refund.description' , img: imageUrl},
            {status: 'failed', title: 'callback.failed.title', description: 'callback.failed.description', img: unsuccessImg},
            {status: 'credit', title: 'callback.credit.title', description: 'callback.credit.description', img: imageUrl},

        ]
    )

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <Card style={{}}>
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
                                    <span style={{display: 'flex', justifyContent: 'center', fontWeight: '700'}}>{t(`${item.title}`)}</span>
                                    <span style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        fontWeight: '300',
                                        textAlign: 'center',
                                        marginTop: '0.5rem'
                                    }}>
                                        {t(`${item.description}`, { cardNumber, amount, phoneNumber })}
                                    </span>
                                </CardContent>
                                <CardActions>
                                    <Button size={'small'} onClick={handleClose} style={{marginTop: '1rem', width: '100%', margin: 'auto'}} color="primary">{t('callback.btn')}</Button>
                                </CardActions>
                            </React.Fragment>

                ))}
            </Card>

        </BootstrapDialog>
    )
}