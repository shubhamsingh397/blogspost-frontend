import React from 'react';
import { Formik, Form, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './signup.css';
import ApiService from './AuthService'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = (props) => {
    let history = useHistory();
    return (
       // <div className="container-md" id= "signUp1" >
        //  <img src={image} width="410px" height="460px" id="signupImg" alt="signup"></img>
           
           
            <Formik
             initialValues= {{
                 firstName: '',
                 lastName: '',
                 email: '',
                 userName: '',          
                 password: '',
             }}
             validationSchema = {
                 Yup.object(
                     {
                         firstName: Yup.string()
                         .min(3,'Must be 3 characters or more')
                         .required('required!'),
                         lastName: Yup.string()
                         .min(3,'Must be 3 characters or more')
                         .required('required!'),
                         email: Yup.string()
                         .email('Invalid email')
                         .required('required!'),
                         userName: Yup.string()
                         .required('required!'),
                         password: Yup.string()
                         .required('required!'),
                     })}
                     onSubmit={(values, {setSubmitting, resetForm})=>{
                      
                        ApiService.addUser(values).then(response =>{
                          Swal.fire({
                            icon: 'success',
                            title: Response.data,
                            showConfirmButton: false,
                            position: "center",
                            timer: 1500
                          })
                          props.handleRegister(response.data)
                          history.push('/login')
                        });
                        resetForm();
                        setSubmitting(false);
                        
                      
                     }}
 > 
      {props => (
        <Form className = "form">
           <h2>Create an Account</h2>
          <Row className="form-group">
            <Col>
            <label htmlFor="firstName" >First Name</label> 
            <span>{<ErrorMessage name="firstName" />}</span>
            <Field name="firstName" type="text"  className="form-control" />
            
          </Col>
          <Col>
            <label htmlFor="lastName">Last Name</label>
            <span>{<ErrorMessage name="lastName"/>}</span>
            <Field name="lastName" type="text" className="form-control" />
            
            </Col>
            </Row>
            <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <span>{<ErrorMessage name="email" />}</span>
            <Field name="email" type="email" className="form-control" />
            
            </div>
            <div className="form-group">
            <label htmlFor="userName">Username</label>
            <span>{<ErrorMessage name="userName"  />}</span>
            <Field name="userName" type="text" className="form-control" />
            
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <span>{<ErrorMessage name="password" />}</span>
            <Field name="password" type="password" className="form-control" />
            
            </div>
            <div className="button">
            <button type = "submit" className="btn btn-danger">{props.isSubmitting ? 'Registering...': 'Sign Up'}</button>
            <button type="submit" onClick={()=>history.push("/login")} className="btn btn-danger">Login</button>
            </div>
        </Form>
        )}
</Formik>
//</div>
    );
};

export default SignUp;
