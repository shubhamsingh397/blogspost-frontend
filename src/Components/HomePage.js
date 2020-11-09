import React from 'react';
import Blogs from './Blogs';
import SideBar from './Sidebar';
import Trending from './Trending';
import './HomePage.css';


 const HomePage = () =>{
   

    return (
      <div className="mainContainer">
        <Trending></Trending>
        <SideBar></SideBar>
        <Blogs></Blogs>
        
      </div>
    )

        }
export default HomePage;
