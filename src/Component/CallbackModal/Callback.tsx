import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";
import imageUrl from "../../Assets/success.png"


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

    };
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
                    style={{height: '100%', width: '100%'}}
                />
                <CardContent>lore</CardContent>
                <CardActions>
                    <Button onClick={handleClose} color="primary"></Button>
                </CardActions>
            </Card>

        </BootstrapDialog>
    )
}