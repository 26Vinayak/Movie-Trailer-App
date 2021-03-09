import React from 'react'
import './css/profileScreen.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Footer from './Footer';


function ProfileScreen() {
    const user = useSelector(selectUser);
    var date = new Date();
    const Checksubscribed = true;
    return (
        <>
            <div className = "profileScreen">
                <Nav/>
                <div className = "profileScreen_body">
                        <h1>Edit Profile</h1>
                    <div className = "profileScreen_info">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8r9te0aQZe9O5cFBJ53Jl7-JselY4fdEvdg&usqp=CAU"  alt = ""/>
                        <div className = "profileScreen__details">
                            <h2>{user.email}</h2>
                            <div className = "profileScreen_plans">

                                    <h3>Plans<span style  = {{paddingLeft:2}}>(Current Plan: premium)</span></h3>
                                    <h4>Renewal date: {date.toLocaleDateString('en-GB')}</h4>

                                    <div className = "payment_Standard">
                                        <div>
                                            <h5>Netflix Standard</h5> 
                                            <small>1080p</small>
                                        </div>
                                        <button className = "Payment_subscribe">Subscribe</button>                     
                                    </div>
                                    <div className = "payment_Standard">
                                        <div>
                                            <h5>Netflix Basic</h5> 
                                            <small>480p</small>
                                        </div>
                                        <button className = "Payment_subscribe">Subscribe</button>                     
                                    </div>
                                    <div className = "payment_Standard">
                                        <div>
                                            <h5>Netflix Basic</h5> 
                                            <small>480p</small>
                                        </div>
                                        <button className = {!Checksubscribed ? `Payment_subscribe`:`Premium_subscribed`}>{Checksubscribed?'Current Package':'Subscribe'}</button>                     
                                    </div>
                                    <button 
                                        onClick = {()=> auth.signOut()}
                                        className = "profileScreen_signOut">Sign Out
                                    </button>
                            </div> 
                        </div>
                    
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ProfileScreen;
