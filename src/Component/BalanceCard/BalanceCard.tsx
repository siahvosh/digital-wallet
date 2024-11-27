// import {useTranslation} from "react-i18next/index";
import {Grid2, IconButton} from "@mui/material";
import * as React from 'react';
import {useTranslation} from "react-i18next";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {FC} from "react";
import {useLocation} from "react-router-dom";
import {useData} from "../../Context/DataContext";

export const BalanceCard: FC<any> = (props: any) =>{
    const path = useLocation()
    const {t} = useTranslation('walletModal')
    const { balance } = useData()
    const { currency } = useData()

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
                <span className={'inventory-style'}>{balance} {t('topCard.rials')}</span>
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