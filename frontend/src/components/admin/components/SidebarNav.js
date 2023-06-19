import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
export const SidebarNav = () => {
    const { collapseSidebar } = useProSidebar();
    const navData = [
        {
            name: "Dashboard",
            href: "/admin/dashboard",
            icon: "<HomeOutlinedIcon />",
            isActive: window.location.pathname === "/admin/dashboard" ? true : false
        },
        {
            name: "Vendor Request",
            href: "/admin/vendor-request",
            icon: "<MoveToInboxIcon />",
            isActive: window.location.pathname === "/admin/vendor-request" ? true : false
        },
        {
            name: "Vendors",
            href: "/admin/vendors",
            icon: "<PersonIcon />",
            isActive: window.location.pathname === "/admin/vendors" ? true : false
        },
        {
            name: "Customers",
            href: "/admin/customers",
            icon: "<GroupIcon />",
            isActive: window.location.pathname === "/admin/customers" ? true : false
        }
    ]

    return (
        <div style={({ height: "100vh" }, { display: "flex" })}>
            <Sidebar breakPoint='md' backgroundColor='#fff' transitionDuration={700} style={{ height: "100vh"}}>
                <Menu menuItemStyles={{
                        button: {
                            [`&.ps-active`]: {
                            backgroundColor: '#E1F3FE',
                            color: '#406AD7'
                            }
                        }
                    }}
                >
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {collapseSidebar();}}
                        style={{ textAlign: "center" }}
                    >
                        <h4>Nandkumar</h4>
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
