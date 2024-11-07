import { Routes, Route} from "react-router-dom";
import {Register} from '../Pages/Register'
export const Routers = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>} />

        </Routes>
    )
}