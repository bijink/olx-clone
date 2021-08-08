import React from 'react';
import './Banner.scss';
import Arrow from '../../assets/Arrow';

const Banner = () => {
   return (
      <div className="bannerParentDiv">
         <div className="bannerChildDiv">
            <div className="menuBar">
               <div className="categoryMenu">
                  <span>ALL CATEGORIES</span>
                  <Arrow></Arrow>
               </div>
               <div className="otherQuickOptions">
                  <div>
                     <span>Cars</span>
                  </div>
                  <div>
                     <span>Motorcycles</span>
                  </div>
                  <div>
                     <span>Mobile Phones</span>
                  </div>
                  <div>
                     <span>For Sale: Houses & Apartments</span>
                  </div>
                  <div>
                     <span>Scooters</span>
                  </div>
                  <div>
                     <span>Commercial & Other Vehicles</span>
                  </div>
                  <div>
                     <span>For Rent: Houses & Apartments</span>
                  </div>
               </div>
            </div>
            <div className="banner"></div>
         </div>
      </div>
   );
};

export default Banner;
