import { Routes, Route} from "react-router-dom";
import {Login} from './../Pages/Login'
export const Routers = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
        </Routes>
    )
}