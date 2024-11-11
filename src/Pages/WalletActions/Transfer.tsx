import * as React from 'react'
import {Card, Grid2} from "@mui/material";
import {BalanceCard} from "../../Component/BalanceCard/BalanceCard";

export const Transfer = () => {
    return(
        <React.Fragment>
            <Card style={{height: '100%',}}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'}>
                        <BalanceCard/>
                    </Grid2>
                    <Grid2 container size={12} spacing={3} className={'action-container'}>

                    </Grid2>
                </Grid2>
            </Card>

        </React.Fragment>
    )
}

