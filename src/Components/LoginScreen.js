import React, { useState } from 'react'
import './css/LoginScreen.css';
import SignInScreen from './SignInScreen';
function LoginScreen() {
    const [signIn,setSignIn] = useState(false);
    return (
        <div className  = "loginScreen">
                <div className = "loginscreen_background">
                    <img
                    className = "loginscreen_logo"
                    src ="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt = ""/>
                </div>
                <button className = "LoginScreen_button"
                    onClick = {()=>{setSignIn(true)}}
                    >
                    Sign In
                </button>
                <div className = "LoginScreen_gradient"/>
                <div className = "loginScreen__body">
                    {signIn ?
                        <SignInScreen/> :
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>

                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className = "loginScreen_input">
                                <form>
                                    <input type = "email" placeholder = "Email Address"/>
                                    <button
                                        onClick = {()=> setSignIn(true)} 
                                        className = "loginScreen_getStarted">
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    }
                </div>
            </div>
    )
}

export default LoginScreen;
