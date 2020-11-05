import React from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/vector/default.svg';
import img1 from '../assets/DSC_0291.JPG';
import './Header.css';
import AuthService from './Authtentication/AuthService';
const Header1 = (props) => {
    let history = useHistory();
   // const [isLoggedIn,setisLoggedIn] = useState(false);
  //  useEffect(()=>{
    //    AuthService.isUserLoggedIn() ? setisLoggedIn(true) : setisLoggedIn(false);
    //},[]);
    const handleLogout1 = () =>
    {
        if(props.isUserLoggedIn)
        { 
            props.handleLogout();
            AuthService.logout();
        }
    }
    return (
        
        <div className='container-fluid navbar1' >
        <Navbar expand="md"className="container-fluid navbar2" sticky="top"> 
            <NavbarBrand onClick={()=>history.push("/homepage")} className="brandLogo">
                <img src={logo} height="100px" width="160px" alt="brandLogo"/>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <NavbarCollapse id="basic-navbar-nav">
                <Nav.Item><Link className="ml-3 text-white" to="/gadgets">Gadgets</Link></Nav.Item> 
                <Nav.Item><Link className="ml-3 text-white" to="/technology">Technology</Link></Nav.Item> 
                <Nav.Item ><Link className="ml-3 text-white"to="/news">Programming</Link></Nav.Item>
                <Nav className="ml-auto nav1">
                    <Nav.Link className="text-white ml-3 mt-1" href="/search">Search</Nav.Link>
                    <Nav.Link className="text-white ml-3 mt-1 mr-2"  href="/write">Write</Nav.Link>
                   {props.isUserLoggedIn ? <NavDropdown alignRight title={
                         props.isUserLoggedIn ? <span className="ml-3">
                                <img src={img1} className="profilePic" height="32px"width="40px" alt="username"></img>
                            </span> : <span><i className="fa fa-user" aria-hidden="true"></i></span>}id="basic-nav-dropdown">
                            <NavDropdown.Item >{
                                
                            <span className="dropdown">
                                <img src={img1}  height="42px"width="45px" alt="username"></img>
                                <div className="userDetails">
                            <p className="font-smaller ml-2">{props.user.firstName +' '+ props.user.lastName}</p>
                            <p className="font-smaller ml-2 text-muted">{'@'+props.user.userName}</p>
                                </div>
                            </span>} </NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/logout" >My Account</Link></NavDropdown.Item>
                    
                        
                        <NavDropdown.Item><Link to="/logout" >My Posts</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        
                            <NavDropdown.Item onClick={ handleLogout1}>{props.isUserLoggedIn ? 'Logout' : 'Login'}</NavDropdown.Item>
                    </NavDropdown> : <Link className="ml-3 mr-1 text-white mt-2 pt-1" to='/login'>Login</Link>}
                </Nav>
            </NavbarCollapse>
        </Navbar>
        </div>
    );
};
export default Header1;