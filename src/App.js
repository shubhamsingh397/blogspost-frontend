import './App.css';
import AuthtenticationPage from './Components/AuthenticationPage';
import ErrorComponent from './Components/ErrorComponent';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header1 from './Components/Header1';
import { useState } from 'react';
import AuthService from './Components/Authtentication/AuthService';

function App(props) {
  const history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const [user,setUser] = useState([]);
  console.log(isUserLoggedIn);

   const handleLogin=(data)=>{

    if(data.status === 200)
   { 
     setIsUserLoggedIn(true);
     var userName = sessionStorage.getItem('authenticatedUser');
     
     AuthService.getUser(userName)
     .then((response)=>{
       //console.log(response.data)
      setUser(response.data);
     })
     
   }
  }

   const handleLogout = () =>{
     console.log('handleLogout')
     setIsUserLoggedIn(false);
     setUser(null);
   }

   const handleRegister = (data) =>{
      setIsUserLoggedIn(true);
      setUser(data);
   }
  return (
    <div className="App">
    
     <Router  history={history}>
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
        </Router>
    </div>
  );
}

export default App;
