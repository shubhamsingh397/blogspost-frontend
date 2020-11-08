import React, { Component } from 'react';
import Login from './Authtentication/login';
import SignUp from './Authtentication/Signup';
import image from '../assets/meeting.jpg';


class AuthenticationPage extends Component{
constructor(props)
{
    super(props);
    this.handleSuccessLogin = this.handleSuccessLogin.bind(this);
    this.handleRegister1 = this.handleRegister1.bind(this);
}

handleSuccessLogin(data){
    this.props.handleLogin(data);
}
handleRegister1(data)
{
    this.props.handleRegister(data);
}
render(){
    return(
        <div className="container p-2 mb-5 " id= "login" >
        <img src={image} width="410px" height="470px" id="signupImg" alt="signup"></img>
         { this.props.page === 'SignUp'? <SignUp handleRegister={this.handleRegister1}></SignUp>:<Login handleSuccessLogin={this.handleSuccessLogin}></Login>}
        </div>
    );
}
}
export default AuthenticationPage;