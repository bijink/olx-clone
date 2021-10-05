import React, { useState } from 'react';
import './Banner.scss';
import Arrow from '../../assets/Arrow';
import Categories from '../Categories/Categories';

const Banner = () => {
   const [catPop, setCatPop] = useState(false);

   return (
      <div className="parentDivBanner">
         <div className="childDivBanner">
            <div className="menuBar">
               <div onClick={() => !catPop ? setCatPop(true) : setCatPop(false)} className="categoryMenu">
                  <span >ALL CATEGORIES</span>
                  <Arrow rotate={catPop} />
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
            {catPop && <Categories />}
            <div className="banner"></div>
         </div>
      </div>
   );
};

export default Banner;
