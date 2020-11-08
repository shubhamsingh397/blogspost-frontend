import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthService from './AuthService';
import './signup.css';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const [loginFailed,setLoginFailed] = useState(false);
    let history = useHistory();
    return(
        //<div className="container-md" id= "login" >
        //<img src={image} width="410px" height="460px" id="signupImg" alt="signup"></img>
        <Formik
            initialValues= {{
                username: '',
                password: '',
                
            }}
            validationSchema = {
                Yup.object({
                    username: Yup.string().required('required!'),
                    password: Yup.string().required('required!'),
                })}
            onSubmit={(values,{setSubmitting,resetForm})=>
            {
                AuthService.authenticateUser(values.username,values.password)
                .then((response)=>{AuthService.registerSuccessfulLogin(values.username,response.data.token);
                console.log(response)
                props.handleSuccessLogin(response);
                history.push('/homepage')
                
                })
                .catch((error)=>{
                    setLoginFailed(true);
                    
                    resetForm();
                    console.log(error)})
            }}>
            {props =>(
                
                <Form className="Loginform">
                    <h2>Login</h2>
                    <div className="form-group">
                    {loginFailed?<span><h2>wrong credentials</h2></span>:null}
                    <label htmlFor="username" >Username</label> 
                    <span>{<ErrorMessage name="username" id="Error" />}</span>
                    <Field name="username" type="text"  className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password" >Password</label> 
                    <span>{<ErrorMessage name="password" id="Error" />}</span>
                    <Field name="password" type="password"  className="form-control" />
                    </div>
                    <div className="button">
                    <button type="submit" className="btn btn-danger">{props.isSubmitting ? 'Loading...': 'Login'}</button>
                    <button onClick={()=>history.push("/signup")} className="btn btn-danger">Sign Up </button>
                    </div>
                </Form>
               
            )}
        </Formik>
       // </div>

    )
}
export default Login;