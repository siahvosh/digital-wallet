import {Button, Card, Grid2, TextField} from "@mui/material";
import React, {useState} from "react";
import hamrahAval from "../../Assets/hamrahAval.svg";
import mtn from "../../Assets/iran.svg";
import shatel from "../../Assets/shatel.svg";
import raytel from "../../Assets/raytel.svg";
import {useData} from "../../Context/DataContext";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import {Sep1000} from "../../indexHelper";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export const InternetPackage = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [selectedIndexOp, setSelectedIndexOp] = useState<number>()
    const [simType, setSimType] = useState<number>()
    const [packages, setPackages] = useState<packageType[]>([])

    const [price, setPrice] = useState<string>('')
    const [creditValue, setCreditValue] = useState<string>()
    const [phoneNumber, setPhoneNumberValue] = useState<string>()
    const [operators, setOperators] = useState<string>()
    const { setData, setCallbackStatus, setAmount, setShowCallback, setPhoneNumber } = useData();

    const { t } = useTranslation('internet');

    interface btnType {
        title: string;
        size: { xs: number; md: number };
        discount?: any;
        img?: any;
        imgSize?: any;
        label?: any;
    }
    interface packageType {
        dataVolume: string
        id: string
        isActive: boolean;
        name: string;
        operator: string;
        validity: string;
        price: number;
    }

    const [operator] = useState<btnType[]>([
        { title : 'همراه اول', size: {xs: 6, md: 3}, img: hamrahAval, imgSize: '50px'},
        { title : 'ایرانسل', size: {xs: 6, md: 3}, img: mtn, imgSize: '70px'},
        { title : 'شاتل', size: {xs: 6, md: 3}, img: shatel, imgSize: '70px'},
        { title : 'رایتل', size: {xs: 6, md: 3}, img: raytel, imgSize: '70px'}
    ])
    const [SimType] = useState<btnType[]>([
        {label: 'دائمی', title : 'simCardMode.permanent', size: {xs: 6, md: 3}},
        {label: 'اعتباری', title : 'simCardMode.credit', size: {xs: 6, md: 3}},
    ])
    // const [packagesItem] = useState<packageType[]>([
    //     {name: 'internet'},
    // ])

    const  handleItemClickOp = (value: string, index: number) => {
        setSelectedIndexOp(index)
        setOperators(value)

        axios
            .post('http://localhost:3000/internet-packages/operator', {
                operator: value
            })
            .then(res => {
                console.log(res)
                setPackages(res.data)
                console.log({alooooooooooooooooo: packages})

            })
            .catch(err => {
                console.log(err)
            })
    };
    const handleSimType = (value: string, index: number) => {
        setSimType(index)
        setCreditValue(value)
    };
    const handlePackagesItem = (value: string, index: number) => {
        setPrice(value)
        setSelectedIndex(index)
    };

    return (
        <React.Fragment>
            <Card style={{height: '100%', width: '100%' }}>
                <Grid2 size={12} container spacing={0} style={{height: '100%'}}>
                    <Grid2 container size={12} spacing={1} className={'content'} style={{alignItems: 'end'}}>
                        <span style={{color: 'white',fontSize: '25px', fontWeight: '800', position: 'relative', top: '0', right: '0.4rem'}}>{t('label.phoneNumber')}</span>
                        <TextField onChange={(e) => setPhoneNumberValue(e.target.value)} style={{background: 'white', borderRadius: '12px'}} fullWidth ></TextField>
                    </Grid2>
                    <Grid2 container style={{marginTop: '1.5rem'}} size={12} spacing={2} className={'action-container'}>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.operator')}</span>
                        </Grid2>
                        <Grid2 container spacing={1} size={12} style={{justifyContent: 'start', marginTop: '0.5rem'}}>
                            {operator.map((item, idx: number) => (
                                <Grid2  style={{padding: '0.5rem'}} key={idx}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <div
                                        onClick={() => handleItemClickOp(item.title, idx)}
                                        style={{
                                            margin: 'auto',
                                            padding: '0.7rem',
                                            cursor: 'pointer',
                                            border: selectedIndexOp === idx ? '3px solid #2bab84': '1px solid gray',
                                            borderRadius: '12px',
                                            width: '100px',
                                            height: '50px',
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: `${item.imgSize}`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                        }}>
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.sim')}</span>
                        </Grid2>
                        <Grid2 container spacing={0} size={12} style={{justifyContent: 'start', marginTop: '0.5rem'}}>
                            {SimType.map((item, idx: number) => (
                                <Grid2 key={idx} style={{padding: '0.5rem'}}
                                       size={{xs: item.size.xs, md: item.size.md}}>
                                    <div
                                        onClick={() => handleSimType(item.label, idx)}
                                        style={{
                                            margin: 'auto',
                                            padding: '0.7rem',
                                            cursor: 'pointer',
                                            border: simType === idx ? '3px solid #2bab84' : '1px solid gray',
                                            borderRadius: '12px',
                                            width: '104px',
                                            height: '50px',
                                            alignContent: 'center',
                                        }}>
                                        <span> {t(item.title)} </span>
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        {packages.length > 0 &&  <Grid2 size={12} style={{display: 'flex', justifyContent: 'start', marginTop: '0.5rem'}}>
                            <span style={{padding: '0 3rem 0 3rem', fontWeight: '700'}}>{t('label.package')}</span>
                        </Grid2>}
                        <Grid2 container spacing={0} size={12} style={{marginTop: '0.5rem'}}>
                             { packages?.map((item, index) => (
                                <Grid2 key={index} size={{xs: 6, md: 3}} style={{padding: '0.5rem'}}>
                                    <div onClick={() => handlePackagesItem(item.operator , index)} style={{
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        border: selectedIndex === index ? '3px solid #2bab84' : '1px solid gray',
                                        padding: '0.7rem',
                                        width: '104px',
                                        margin: 'auto',
                                        height: '50px',
                                        alignContent: "center"
                                    }}>
                                       <span> {t(item.name)} </span>
                                    </div>
                                </Grid2>
                            ))}
                        </Grid2>
                        <Grid2 size={12} style={{margin: 'auto', width: '65vw', marginTop: '2rem'}}>
                            <Button  style={{width: '100%'}}>{t('btn')}</Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
            <PackageModal packages={packages} />
        </React.Fragment>
    )
}

interface packageType {
    dataVolume: string
    id: string
    isActive: boolean;
    name: string;
    operator: string;
    validity: string;
    price: number;
}
interface Props {
    packages: packageType[];
}

const PackageModal: React.FC<Props> = (props ) => {

    const showPrice = (value: number) => {
        return Sep1000(value.toString());
    }
    return (
        <React.Fragment>
            <BootstrapDialog
                fullScreen
                aria-labelledby="customized-dialog-title"
                open={true}
            >
                <Card style={{ padding: '0rem 2rem 0 2rem'}}>
                    {props.packages.map((item, idx) => (
                        <div key={idx} style={{border: '1px solid grey', height: '8rem',marginTop: '2rem', borderRadius: '12px', cursor: 'pointer'}}>
                            <Grid2 container spacing={0} size={12} style={{padding: '1rem', width: '100%', height: '100%'}}>
                                <Grid2 size={12} container style={{}}>
                                    <Grid2 size={6}>
                                        <span>{item.name} {item.operator}</span>
                                    </Grid2>
                                    <Grid2 size={6} style={{justifyContent: 'end', display: 'flex'}}>
                                        <span>{item.validity}</span>
                                    </Grid2>
                                </Grid2>
                                <Grid2 size={12} container style={{alignItems: 'end', display: 'flex'}}>
                                    <Grid2 size={6}>
                                        <Button style={{padding: '0.3rem'}}> خرید بسته</Button>
                                    </Grid2>

                                    <Grid2 size={6} style={{marginTop: '0.5rem', justifyContent: 'end', display: 'flex'}}>
                                        <span>{showPrice(item.price)}</span>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </div>
                    ))}
                </Card>
            </BootstrapDialog>
        </React.Fragment>
    )
}