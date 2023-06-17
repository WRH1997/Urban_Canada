import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './landing.css';

const LandingPage = () => {

    const nav = useNavigate();
    const [data, setData] = useState({username:"", password:""});
    const [submitted, setSubmitted] = useState(false);

    //placeholder authentication function (SignIn method below needs 
    //some method to check database for user credentials)
    const VerifyUser = () => {
        if(data.username=="" || data.password==""){
            return false;
        }
        return true;
    }

    const SignIn = (event) => {
        event.preventDefault();
        if(VerifyUser){
            setSubmitted(true);
        }
        else{
            alert("Username and/or Password Incorrect!\nPlease try again.");
            return;
        }
    }

    useEffect(()=>{
        if(submitted){
            nav('/MyBookings', {state: {username:data.username}});
        }
    });

    const updateStates = (event) => {
        let stateName = event.target.name;
        let stateVal = event.target.value;
        setData(values=>({...values, [stateName]:stateVal}))
    }

    return(
        <div class='landing-page'>
            <h2 class='website-name'>[WEBSITE NAME]</h2>
            <i><span class='tagline'>[WEBSITE TAGLINE]</span></i>
            <br></br>
            <center>
            <div class='landing-auth'>
                <h4>Sign In</h4>
                <div class='hl'></div>
                <form class='landing-sign-in' onSubmit={SignIn}>
                    <label for='username' class='landing-lbl'>Username: </label>
                    <input type='text' name='username' class='username' onChange={updateStates} value={data.username}></input>
                    <br></br><br></br>
                    <label for='password' class='landing-lbl'>Password: </label>
                    <input type='password' class='password' name='password' value={data.password} onChange={updateStates}></input>
                    <br></br><br></br>
                    <button type='submit' class='landing-submit'>Confirm</button>
                </form>
                Don't have an account?
                <br></br>
                <Link to='/signup'>Click here to register</Link>
            </div>
            </center>
        </div>
    );
}

export default LandingPage;