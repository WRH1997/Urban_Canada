// author: Nandkumar Kadivar

import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../../assets/header_logo.png";

export const SidebarNav = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <div style={({ height: "100vh" }, { display: "flex" })}>
            <Sidebar breakPoint='md' backgroundColor='#fff' transitionDuration={700} style={{ height: "100vh"}}>
                <Menu menuItemStyles={{
                        button: {
                            color: "#1F2937",
                            [`&.ps-active`]: {
                            backgroundColor: '#9BA4B5',
                            color: '#1F2937'
                            }
                        }
                    }}
                >
                    <MenuItem
                        icon={<MenuOutlinedIcon style={{color: "#fff"}}/>}
                        onClick={() => {collapseSidebar();}}
                        style={{ textAlign: "center", backgroundColor: "#1f2937", border: "none"}}
                    >
                        <img className="h-10 w-15 lg:block" src={logo} />
                    </MenuItem>

                    <MenuItem icon={<HomeOutlinedIcon />}  active={window.location.pathname == "/admin/dashboard" ? true : false} onClick={()=>window.location.href = '/admin/dashboard'}>Dashboard</MenuItem>
                    <MenuItem icon={<MoveToInboxIcon />} active={window.location.pathname == "/admin/vendor-request" ? true : false} onClick={()=>window.location.href = '/admin/vendor-request'}>Vendor Request</MenuItem>
                    <MenuItem icon={<PersonIcon />} active={window.location.pathname == "/admin/vendors" ? true : false} onClick={()=>window.location.href = '/admin/vendors'}>Vendors</MenuItem>
                    <MenuItem icon={<GroupIcon />} active={window.location.pathname == "/admin/customers" ? true : false} onClick={()=>window.location.href = '/admin/customers'}>Customers</MenuItem>
                    
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SidebarNav
