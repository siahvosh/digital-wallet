import {Card} from "@mui/material";
import React, {useState} from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LayersIcon from "@mui/icons-material/Layers";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";

const MenuBar = () => {
    const navigate = useNavigate();

    interface homeBtnType {
        icon: JSX.Element;
        size: { xs: number; md: number };
        path: string;
    }
    const [homeBtn] = useState<homeBtnType[]>([
        { icon: <SettingsIcon/>, size: {xs: 6, md: 6}, path: '/setting'},
        { icon: <LocalGroceryStoreIcon/>, size: {xs: 6, md: 6}, path: '/setting'},
        { icon: <LayersIcon/>, size: {xs: 6, md: 6}, path: '/analytics'},
        { icon: <HomeIcon/>, size: {xs: 6, md: 6}, path: '/'},

    ])
    return (
        <Card className={"menu"}>
            <div style={{justifyContent: 'space-between', display: 'flex', padding: '0rem 1rem 1rem 1rem', color: '#2bab84'}}>
                {homeBtn.map((item, idx: number) => (
                    <div onClick={() => navigate(item.path)} style={{cursor: 'pointer'}} key={idx}> {item.icon} </div>
                ))}
            </div>
        </Card>
    )
}


export default MenuBar;