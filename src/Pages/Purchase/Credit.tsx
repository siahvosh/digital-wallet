import {Button, Card, Grid2, IconButton, TextField} from "@mui/material";
import React, {useState} from 'react';


export const Credit = () => {
    interface operatorBTnType {
        title: string;
        size: { xs: number; md: number };
        path: string;
    }
    const [operator] = useState<operatorBTnType[]>([
        { title : 'همراه اول', size: {xs: 6, md: 3}, path: '/transfer'},
        { title : 'ایرانسل', size: {xs: 6, md: 3}, path: '/'},
        { title : 'شاتل', size: {xs: 6, md: 3}, path: '/refund'},
        { title : 'رایتل', size: {xs: 6, md: 3}, path: '/'}
    ])


    return (
        <React.Fragment>
            <Card style={{height: '30rem', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '2rem', right: '0.4rem'}}>شماره همراه</span>
                        <TextField style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>
                        <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم اپراتور؟</span>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '1rem'}}>
                            {operator.map((item , idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}} size={{ xs: item.size.xs, md: item.size.md }}>
                                    <Button variant={"outlined"} className={'btn'} style={{padding: '0.7rem', width: '100px'}}>
                                        {item.title}
                                    </Button> <br/>
                                    <span></span>
                                </Grid2>
                            ))}

                        </Grid2>
                    </Grid2>

                </Grid2>
            </Card>
        </React.Fragment>
    )
}