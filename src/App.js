import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter as Router,Switch,Route
} from 'react-router-dom';
import Login from './Components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './Components/ProfileScreen';


function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const unsubscribe = useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
          //Logged In
          console.log(userAuth);
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email
          }));
      }
      else
      {
          // Logged Out
          dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);


  return (
    <div className="app">
      <Router>
      {!user?(
        <Login/>)
       :(
        <Switch> 
          <Route exact path = '/profile'>
            <ProfileScreen/>
          </Route>
          <Route exact path = "/">
            <HomeScreen/>
          </Route>
        </Switch>
      )} 
      </Router>
    </div>
  );
}



export default App;