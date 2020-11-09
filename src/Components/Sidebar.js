import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

const SideBar = () => {

    return(
        <div className="sideBarParent" >
            <div className="sideBar container">
            <h3 >Discover what you like</h3>
            
                <div className=" sideBarGrid">
                    <Link to="/categories"><h4>Mobiles</h4></Link>
                    <h4>Self</h4>
                    <h4>Relationship</h4>
                    <h4>Relationship</h4>
                    <h4>Relationship</h4>
                    <h4>programming</h4>
                    <h4>Relationship</h4>
                    <h4>Relationship</h4>

                </div>
            
                </div>
        </div>
    )
}
export default SideBar;