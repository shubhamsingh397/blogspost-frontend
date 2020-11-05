import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthService from './Authtentication/AuthService';
const LogoutComponent =  (props) => {
    let history = useHistory();
   
    useEffect(
      ()=>{
       AuthService.logout();
      }
    );
    function alert()
    {
      Swal.fire({
        title: 'Logged Out',
        text: "You have logged out successfully",
        icon: "warning",
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        confirmButtonText: 'Login Again',
        denyButtonText: `Home Page`

      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/login");
       
        }
        else if(result.isDenied){
            history.push("/homepage");
        }
      })  
    }
    return(
        
       
      <button onClick={alert} className="btn btn-danger">click</button>
          
        
    );
};
export default LogoutComponent;