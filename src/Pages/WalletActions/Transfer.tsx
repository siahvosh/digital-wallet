import * as React from 'react'
import {Card, Grid2, TextField} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';

export const Transfer = () => {
    return(
        <React.Fragment>
            <Card style={{height: '100%',}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard/>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={3} className={'action-container'}>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{borderRadius: '8px' ,width: '65vw', height: '3rem', border: '1px solid #2bab84',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem 0 1rem'}}>
                                    <span style={{alignContent: 'center'}}>شماره مقصد را وارد کنید</span>
                                    <EditIcon/>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{width: '65vw', height: '3rem',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'end'}}>
                                    <PeopleIcon/>
                                    <span style={{alignContent: 'center'}}>مخاطبین</span>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} style={{justifyContent: 'center', display: 'center'}}>
                            <div style={{borderRadius: '8px' ,width: '65vw', height: '3rem', border: '1px solid #2bab84',justifyContent: 'space-between' ,margin: 'auto', alignContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem 0 1rem'}}>
                                    <span style={{alignContent: 'center'}}>مبلغ دلخواه (ریال) </span>
                                    <CloseIcon/>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={12} container style={{justifyContent: 'center', display: 'center', width: '65vw', margin: 'auto', alignContent: 'center'}}>
                            <Grid2 size={12}>
                                <span style={{display: 'flex', justifyContent: 'start'}}>مبلغ پیشنهادی (ریال)</span>
                            </Grid2>
                            <Grid2  sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>100.000</div>
                            </Grid2>
                            <Grid2  sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>200.000</div>
                            </Grid2>
                            <Grid2  sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>500.000</div>
                            </Grid2>
                            <Grid2  sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>1.000.000</div>
                            </Grid2>
                            <Grid2  sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>2.000.000</div>
                            </Grid2>
                            <Grid2 sx={{display: { xs: '6', md: '4' } }}>
                                <div style={{borderRadius: '12px', border: '2px solid gray', padding: '1rem'}}>3.000.000</div>
                            </Grid2>

                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        </React.Fragment>
    )
}

