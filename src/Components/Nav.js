import React, { useState, useEffect } from 'react'
import './css/Nav.css';
import { useHistory } from 'react-router-dom';

function Nav() {

      const [show,handleshow] = useState(false);
      const history = useHistory();

      const transitionNavBar = ()=>{
          if(window.scrollY>100)
          {
              handleshow(true);
          }
          else
          {
              handleshow(false);
          }
      }

      useEffect(() => {
          window.addEventListener('scroll',transitionNavBar);
          return () => window.removeEventListener('scroll',transitionNavBar);
      }, []);


    return (
        <div className = {`nav ${show && "nav__background"}`}>
 
            <div className = "nav_contents">
                <img
                    onClick = {()=>history.push("/")}
                    className = "nav_logo"
                    src = "https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                    alt = ""
                />
                <img
                    onClick = {()=>history.push("/profile")}
                    className = "nav_avatar" 
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8r9te0aQZe9O5cFBJ53Jl7-JselY4fdEvdg&usqp=CAU"
                    alt = ""
                />
            </div>



        </div>
    )
}

export default Nav
