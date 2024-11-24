import { Routes, Route} from "react-router-dom";
import {Register} from '../Pages/Register/Register'
import {Verify} from '../Pages/Register/Verify'
import {Home} from '../Pages/HomePage/Home'
import {Transfer} from '../Pages/WalletActions/Transfer'
import {AddMoney} from '../Pages/WalletActions/AddMoney'
import {Refund} from '../Pages/WalletActions/Refund'
import {SignIn} from '../Pages/Login/SignIn'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="register" element={<Register/>} />
            <Route path="verify" element={<Verify/>} />
            <Route path="sign" element={<SignIn/>} />
            <Route path="transfer" element={<Transfer/>} />
            <Route path="add" element={<AddMoney/>} />
            <Route path="refund" element={<Refund/>} />
            <Route path="/*" element={<div style={{color: "red", margin: "auto", fontSize: '5rem'}}> NOT FOUND 404</div>}/>
        </Routes>
    )
}