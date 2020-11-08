import React from 'react';
import Blogs from './Blogs';
import SideBar from './Sidebar';
import './HomePage.css';


 const HomePage = () =>{
   

    return (
      <div className="mainContainer">
      <Blogs></Blogs>
      <SideBar></SideBar>
      </div>
    )

        }
export default HomePage;
