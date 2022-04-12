import React from 'react';
import './OLXAd.scss';


const OLXAd = () => {
   return (
      <div className="parentDivOLXAd">
         <div className="appAd">
            <div className="adImg"></div>
            <div className="adText">
               <h1>TRY THE OLX APP</h1>
               <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
            <div className="line"></div>
            <div className="linksParent">
               <div className="linksChild">
                  <h5>GET YOUR APP TODAY</h5>
                  <div className="links">
                     <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="ios-app-store" /></a>
                     <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"> <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="android-app-store" /></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OLXAd;
