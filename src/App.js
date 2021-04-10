import './App.css';
import AuthtenticationPage from './Components/AuthenticationPage';
import ErrorComponent from './Components/ErrorComponent';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header1 from './Components/Header1';
import { useState } from 'react';
import AuthService from './Components/Authtentication/AuthService';
import { useEffect } from 'react';
import Footer from './Components/Footer';

function App(props) {
  const history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const [user,setUser] = useState([]);
  
useEffect(()=>{
    var loggedIn = localStorage.getItem('isUserLoggedIn')
    if(loggedIn===true)
    {
      
      setIsUserLoggedIn(true)
      var user1 = localStorage.getItem('user')
      setUser(JSON.parse(user1))
      
    }
  },[])
 

   const handleLogin=(data)=>{

    if(data.status === 200)
   { 
     setIsUserLoggedIn(true);
     var userName = sessionStorage.getItem('authenticatedUser');
     console.log(userName)
     AuthService.getUser(userName)
     .then((response)=>{
       console.log(response.data)
       var user1 = response.data;
      localStorage.setItem('isUserLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user1));
      
      setUser(user1);
     }).catch((error)=>{
      console.log(error)})
     
   }
  }

   const handleLogout = () =>{
     console.log('handleLogout')
     setIsUserLoggedIn(false);
     setUser([]);
     localStorage.removeItem('isUserLoggedIn')
     localStorage.removeItem('user')

   }

   const handleRegister = (data) =>{
      setIsUserLoggedIn(true);
      setUser(data);
   }
  return (
    <div className="page-container" >
    
     <Router  history={history}>
       <div className="App">
            <Header1 isUserLoggedIn={isUserLoggedIn} user={user} handleLogout={handleLogout}></Header1>
            <>
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/homepage" exact component={HomePage}/>
            
            <Route path="/signup" render={() => <AuthtenticationPage {...props} handleRegister={handleRegister} page='SignUp' />}/>
            <Route path="/login" render={() => <AuthtenticationPage {...props} handleLogin={handleLogin}page='Login' />}/>
            
            <Route component={ErrorComponent}/>
            </Switch>
            </>
           </div>
           <Footer></Footer> 
        </Router>
    </div>
    
  );
}

export default App;
