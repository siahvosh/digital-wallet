import {Card, Grid2, TextField} from "@mui/material";
import React, {useState} from "react";


export const InternetPackage = () => {
    const [phoneNumber, setPhoneNumberValue] = useState<string>()
    return (
        <React.Fragment>
            <Card style={{height: '100%', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '0', right: '0.4rem'}}>شماره همراه</span>
                        <TextField onChange={(e) => setPhoneNumberValue(e.target.value)} style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}