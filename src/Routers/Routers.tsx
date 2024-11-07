import { Routes, Route} from "react-router-dom";
import {Register} from '../Pages/Register/Register'
import {Verify} from './../Pages/Register/Verify'

export const Routers = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>} />
            <Route path="verify" element={<Verify/>} />
            <Route path="/*" element={<div style={{color: "red", margin: "auto", fontSize: '5rem'}}> NOT FOUND 404</div>}/>

        </Routes>
    )
}