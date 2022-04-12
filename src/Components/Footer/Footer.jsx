import React from 'react';
import './Footer.scss';
import Facebook from '../../assets/Facebook';
import Instagrame from '../../assets/Instagrame';
import Twitter from '../../assets/Twitter';
import YouTube from '../../assets/YouTube';


const Footer = () => {
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
            <div className="follow">
               <div className="heading">
                  <p>FOLLOW US</p>
               </div>
               <div className="socialMedia">
                  <Facebook />
                  <Instagrame />
                  <Twitter />
                  <YouTube />
               </div>
               <div className="appLink">
                  <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="ios-app-store" /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"> <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="android-app-store" /></a>
               </div>
            </div>
         </div>
         <div className="footer">
            <p><span>Other Countries</span>Pakistan - South Africa - Indonesia</p>
            <p><span>Free Classifieds in India.</span> © 2006-2021 OLX</p>
         </div>
      </div>
   );
};

export default Footer;
