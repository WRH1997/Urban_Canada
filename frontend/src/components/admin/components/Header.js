// author: Nandkumar Kadivar

import React, {useState, useRef, useEffect} from 'react'
import {useProSidebar} from 'react-pro-sidebar'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

    const {toggleSidebar,broken} = useProSidebar();
    const [menuStatus,setMenuStatue] = useState(false);

    const navReference = useRef(null)

    const toggleMenu = () => {
        setMenuStatue(!menuStatus)
    }

    const closeMenu = () => {
        setMenuStatue(false)
    }

    useEffect((()=>{
        var onEffect = (event) => {
            if(!navReference.current.contains(event.taget)){
                setMenuStatue(false)
            }
        }

        document.addEventListener("mousedown",onEffect)

        return() =>{
            document.removeEventListener("mousedown", onEffect);
        }
    }))

    const handleSignOut = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("authToken");
        window.location.href = "/login"
    }

    return (
        <header class="header fixed-top d-flex align-items-center">
            <MenuIcon style={{color: "#fff"}} onClick={toggleSidebar} />
            <nav class="ms-auto p-2" ref={navReference}>
                <IconButton size='large' onClick={handleSignOut}>
                    <LogoutIcon style={{color: "#fff"}} />
                </IconButton>                
            </nav>
        </header>
    )
}

export default Header