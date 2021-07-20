import React from 'react';
import './Footer.css';

function Footer() {
   return (
      <div className="footerParentDiv">
         <div className="content">
            <div>
               <div className="heading">
                  <p>POPULAR LOCATIONS</p>
               </div>
               <div className="list">
                  <ul>
                     <li>Kolkata</li>
                     <li>Mumbai</li>
                     <li>Chennai</li>
                     <li>Pune</li>
                  </ul>
               </div>
            </div>
            <div>
               <div className="heading">
                  <p>TRENDING LOCATIONS</p>
               </div>
               <div className="list">
                  <ul>
                     <li>Bhubaneshwar</li>
                     <li>Hyderabad</li>
                     <li>Chandigarh</li>
                     <li>Nashik</li>
                  </ul>
               </div>
            </div>
            <div>
               <div className="heading">
                  <p>ABOUT US</p>
               </div>
               <div className="list">
                  <ul>
                     <li>About OLX Group</li>
                     <li>Careers</li>
                     <li>Contact Us</li>
                     <li>OLXPeople</li>
                     <li>Waah Jobs</li>
                  </ul>
               </div>
            </div>

            <div>
               <div className="heading">
                  <p>OLX</p>
               </div>
               <div className="list">
                  <ul>
                     <li>Help</li>
                     <li>Sitemap</li>
                     <li>Legal & Privacy information</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer">
            <p><span>Other Countries</span>Pakistan - South Africa - Indonesia</p>
            <p><span>Free Classifieds in India</span>. © 2006-2021 OLX</p>
         </div>
      </div>
   );
}

export default Footer;
