import React from 'react';
import { useState,useEffect } from 'react';

import logo from '../../assets/images/logo.png'

const Navbar = () => {


const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [prevScrollPos]);


    return (
    <div class="my-navbar" id='navbar'>
        <a class="my-navbar-brand" href="#"><img id="logo" src={logo} width="20px" height="20px"/>  Services</a>
        <input type="checkbox" id="navbar-toggle" class="my-navbar-toggle" hidden/>
        <label for="navbar-toggle" class="navbar-toggle-label">&#9776;</label>
        <nav class="my-navbar-nav">
          <a class="my-nav-link" href="#spl">Service Providers</a>
          <a class="my-nav-link" href="#schedule">Schedule</a>
          <a class="my-nav-link" href="#rating">My Rating</a>
          <a class="my-nav-link" href="#logout">Logout</a>
        </nav>
      </div>
    );
  };



export default Navbar;
