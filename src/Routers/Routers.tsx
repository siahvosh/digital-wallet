import { Routes, Route} from "react-router-dom";
import {Register} from '../Pages/Register/Register'
import {Verify} from '../Pages/Register/Verify'
import {Home} from '../Pages/HomePage/Home'
import {Transfer} from '../Pages/WalletActions/Transfer'
import {AddMoney} from '../Pages/WalletActions/AddMoney'
import {Refund} from '../Pages/WalletActions/Refund'
import {SignIn} from '../Pages/Login/SignIn'
import ProtectedRoute from "../Component/ProtectedRouter/ProtectedRouter";
import {InternetPackage} from "../Pages/Purchase/InternetPackage";
import {CardMedia} from "@mui/material";
import React from "react";
import img from "./../Assets/404.png"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={ <ProtectedRoute> <Home/> </ProtectedRoute>} />
            <Route path="register" element={<Register/>} />
            <Route path="verify" element={<Verify/>} />
            <Route path="login" element={<SignIn/>} />
            <Route path="transfer" element={<ProtectedRoute> <Transfer/> </ProtectedRoute>} />
            <Route path="add" element={ <ProtectedRoute> <AddMoney/> </ProtectedRoute>} />
            <Route path="refund" element={ <ProtectedRoute> <Refund/> </ProtectedRoute>} />
            <Route path="internet" element={ <ProtectedRoute> <InternetPackage/> </ProtectedRoute>} />
            <Route path="/*" element={<div style={{color: "red", margin: "auto", fontSize: '5rem'}}>

                <CardMedia
                    component="img"
                    image={img}
                    alt="Paella dish"
                    style={{height: '30rem', width: '100%', margin: 'auto'}}
                />
            </div>}/>
        </Routes>
    )
}