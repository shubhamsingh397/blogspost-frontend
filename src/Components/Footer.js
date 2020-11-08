import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
  
          
    <div className="footer-dark ">
    <footer>

        <div className="container">
            <div className="row">
                <div className="col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
               {/* <div class="col-md-3 item">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/sitemap">Sitemaps</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms and Condition</Link></li>
                    </ul>
  </div>*/}
                <div className="col-md-3 item">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to='/advertise'>Advertise</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/career">Career</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 item text font-smaller">
                    <h3>Blogspot.com</h3>
                    <p>Blogspot is an open platform. Here readers come to find insightful and dynamic thinking and bring new ideas to the surface.</p>
                    
                </div>
                
                <div className="col-md-3 item social">
                    <Link to='/'><i className="fab fa-facebook"></i></Link>
                    <Link to='/'><i className="fab fa-twitter"></i></Link>
                    <Link to='/'><i className="fab fa-youtube"></i></Link>
                    <Link to='/'><i className="fab fa-instagram"></i></Link>
                    <Link to='/'><i className="fab fa-google"></i></Link>
                </div>
            </div>
            <p className="copyright">Blogspot.com © 2020</p>
        </div>
    </footer>
   
</div>



  );
}

export default Footer;