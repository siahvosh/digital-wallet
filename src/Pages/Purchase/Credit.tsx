import {Button, Card, Grid2, TextField} from "@mui/material";
import React, {useState} from 'react';


export const Credit = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>()


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

    interface priceItemsType {
        price: string;
    }
    const [priceItems] = useState<priceItemsType[]>([
        {price: '100,000'},
        {price: '200,000'},
        {price: '300,000'},
        {price: '500,000'},
        {price: '1,000,000'},
        {price: '2,000,000'},
    ])

    const handleItemClick = (value: string, index: number) => {
        setSelectedIndex(index)
        // setCustomPrice(value)
    };
    return (
        <React.Fragment>
            <Card style={{height: '100%', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '0', right: '0.4rem'}}>شماره همراه</span>
                        <TextField style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>

                        <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم اپراتور؟</span>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'center', marginTop: '1rem'}}>
                            {operator.map((item, idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <Button variant={"outlined"} className={'btn'}
                                            style={{padding: '0.7rem', width: '100px'}}>
                                        {item.title}
                                    </Button> <br/>
                                    <span></span>
                                </Grid2>
                            ))}
                        </Grid2>

                        <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>کدوم شارژ؟</span>
                        <Grid2 size={12}>
                            <Grid2 container spacing={0} size={12}
                                   style={{justifyContent: 'center', marginTop: '1rem'}}>
                                {operator.map((item, idx: number) => (
                                    <Grid2 key={idx} style={{padding: '0.5rem'}}
                                           size={{xs: item.size.xs, md: item.size.md}}>
                                        <Button variant={"outlined"} className={'btn'}
                                                style={{padding: '0.7rem', width: '100px'}}>
                                            {item.title}
                                        </Button> <br/>
                                        <span></span>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Grid2>

                        <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>مبلغ شارژ</span>
                        <Grid2 size={12}>
                            {priceItems.map((item, index) => (
                                <Grid2 key={index} size={{xs: 12, md: 4, lg: 4}}>
                                    <div className={selectedIndex === index ? 'active-items' : 'btn'}
                                         onClick={() => handleItemClick(item.price, index)} style={{
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                    }}>
                                        {item.price}
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>

                    </Grid2>

                </Grid2>
            </Card>
        </React.Fragment>
    )
}