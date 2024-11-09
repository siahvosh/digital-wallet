import {Card} from "@mui/material";
import React, {useState} from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LayersIcon from "@mui/icons-material/Layers";
import HomeIcon from "@mui/icons-material/Home";

const MenuBar = () => {
    const [homeBtn] = useState([
        { icon: <SettingsIcon/>, size: {xs: 6, md: 6}},
        { icon: <LocalGroceryStoreIcon/>, size: {xs: 6, md: 6}},
        { icon: <LayersIcon/>, size: {xs: 6, md: 6}},
        { icon: <HomeIcon/>, size: {xs: 6, md: 6}},

    ])
    return (
        <Card className={"menu"}>
            <div style={{justifyContent: 'space-between', display: 'flex', padding: '0rem 1rem 1rem 1rem', color: '#2bab84'}}>
                {homeBtn.map((item, idx) => (
                    <div> {item.icon} </div>
                ))}
            </div>
        </Card>
    )
}


export default MenuBar;