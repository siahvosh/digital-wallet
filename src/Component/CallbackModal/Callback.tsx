import {Card} from "@mui/material";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";


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
            <Card style={{height: '30rem', width: '30rem'}}></Card>

        </BootstrapDialog>
    )
}