import React, {useState, useRef, useEffect} from 'react'
import {useProSidebar} from 'react-pro-sidebar'
import {IconButton, List,ListItemButton,ListItem,ListItemIcon, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
                    {/* <AccountCircleIcon /> */}
                    <LogoutIcon style={{color: "#fff"}} />
                </IconButton>
                {/* {
                    menuStatus && 
                    <div style={{position: 'relative'}}>
                        <List style={{position: 'absolute', top: '0px',left: '-80px', backgroundColor: '#fff', boxShadow: '0px 2px 20px rgba(1, 41, 112, 0.1)'}} >
                            <ListItemButton onClick={()=>console.log("Clicked!")}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </List>
                    </div>
                } */}
                
            </nav>
        </header>
    )
}

export default Header