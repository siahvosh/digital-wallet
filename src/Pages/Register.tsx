import React, {useState} from 'react'
import {Card, CardActions, CardContent, CardMedia, Grid2} from "@mui/material";
import rbImage from './../Assets/Tablet login-cuate.png'


export const Register = () => {
    const [imageUrl, setImageUrl] = useState(rbImage);

    return(
        <React.Fragment>
            <Card style={{width: 'calc(100%)', padding: '1rem 0 2rem 0'}}>
                <div style={{width: '70%', margin: 'auto'}}>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="Paella dish"
                        style={{
                            width: '70%',

                            margin: 'auto'
                        }}
                    />
                </div>
                <CardContent>
                    <Grid2>
                        <Grid2 size={12}>
                            <span style={{fontSize: '1.5rem', fontWeight: '500'}}>{('verify.step2.title')}</span>
                        </Grid2>
                    </Grid2>
                </CardContent>

            </Card>
        </React.Fragment>
    )

}