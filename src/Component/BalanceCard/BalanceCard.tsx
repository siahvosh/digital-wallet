// import {useTranslation} from "react-i18next/index";
import {Grid2, IconButton} from "@mui/material";
import * as React from 'react';
import {useTranslation} from "react-i18next";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {FC} from "react";
import {useLocation} from "react-router-dom";

export const BalanceCard: FC<any> = (props: any) =>{
    const path = useLocation()
    const {t} = useTranslation('walletModal')

    return(
        <React.Fragment>
            <Grid2 size={12}>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <span style={{color: 'white'}}>{props.title}</span> <br/>
                </div>
            </Grid2>
            <Grid2 size={12}>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <span className={'title-style'}>{t('topCard.inventory')}</span> <br/>
                </div>
            </Grid2>
            <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                <span className={'inventory-style'}>20.000.000 {t('topCard.rials')}</span>
            </Grid2>
            <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                <Grid2>
                    {path.pathname === '/' &&
                        <IconButton className={'btn'} onClick={props.closeModal} aria-label="delete" size="small">
                            <FullscreenExitIcon/>
                        </IconButton>
                    }
                </Grid2>
            </Grid2>
        </React.Fragment>
    )
}