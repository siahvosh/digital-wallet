// import {useTranslation} from "react-i18next/index";
import {Grid2} from "@mui/material";
import * as React from 'react';
import {useTranslation} from "react-i18next";


export const BalanceCard = () =>{
    const {t} = useTranslation('walletModal')
    return(
        <React.Fragment>

                <Grid2 size={12}>
                    <div style={{justifyContent: 'center', display: 'flex'}}>
                        <span className={'title-style'}>{t('topCard.inventory')}</span> <br/>
                    </div>
                </Grid2>
                <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                    <span className={'inventory-style'}>20.000.000 {t('topCard.rials')}</span>
                </Grid2>
                <Grid2 size={12} style={{justifyContent: 'center', display: 'flex'}}>
                    {/*    <IconButton className={'btn'} onClick={handleClose} aria-label="delete" size="small">*/}
                    {/*        <FullscreenExitIcon/>*/}
                    {/*    </IconButton>*/}
                    {/*</Grid2>*/}
                </Grid2>

        </React.Fragment>
    )
}