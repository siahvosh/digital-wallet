import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";
import imageUrl from "../../../Assets/success.png"


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
    const handleClose = () => {
        setOpen(false);
    };

    interface statusType {
        title: string;
        description: string;
    }

    const status = useState<statusType>(
        {title: 'انتقال با موفقیت انجام شد\n', description: 'ملبغ 100.000 ریال از کیف شما به حساب 5044456263980238 واریز شد',}
    )


    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <Card style={{height: '30rem', width: '30rem'}}>


                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt="Paella dish"
                    style={{height: '70%', width: '70%', margin: 'auto'}}
                />
                <CardContent>
                    <span style={{display: 'flex', justifyContent: 'center', fontWeight: '700'}}>انتقال با موفقیت انجام شد</span>
                    <span style={{display: 'flex', justifyContent: 'center', fontWeight: '300', textAlign: 'center', marginTop: '0.5rem'}}>ملبغ 100.000 ریال از کیف شما به حساب 5044456263980238 واریز شد</span>
                </CardContent>
                <CardActions style={{position: 'absolute', bottom: '0', right: '0'}}>
                    <Button size={'small'} onClick={handleClose} color="primary">متوجه شدم</Button>
                </CardActions>
            </Card>

        </BootstrapDialog>
    )
}