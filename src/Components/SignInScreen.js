import React, { useRef } from 'react';
import './css/signupScreen.css';
import { auth } from '../firebase';

function SignInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(err=>{
            alert(err.message);
        });
          
    }

    const singIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value            
        ).then(authUser =>{
            console.log(authUser);
        }).catch(err=>{
            alert(err.message);
        });
    }
    
    return (
        <div className = "signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref = {emailRef} placeholder = "Email" type = "email"/>
                <input ref = {passwordRef} placeholder = "Password" type = "password"/>
                <button type = "submit"
                    onClick = {singIn}
                    >
                    SignIn
                 </button>
                 <h4>
                    <span className = "sigupScreen_gray">New to Netflix?</span>
                    <span className = "signupScreen_link"
                        onClick = {register}> Sign Up now.</span></h4>
            </form>
        </div>
    );
}

export default SignInScreen;
