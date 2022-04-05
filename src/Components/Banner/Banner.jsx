import React, { useState } from 'react';
import './Banner.scss';
import Arrow from '../../assets/Arrow';
import Categories from '../Categories/Categories';

const Banner = (props) => {
   const [catPop, setCatPop] = useState(false);

   const categoriesItems = ['Cars', 'Motorcycles', 'Mobile Phones', 'For Sale: Houses & Apartments', 'Scooters', 'Commercial & Other Vehicles', 'For Rent: Houses & Apartments'];


   return (
      <div className="parentDivBanner">
         <div className="menuBar">
            <div onClick={() => !catPop ? setCatPop(true) : setCatPop(false)} className="categoryMenu">
               <span >ALL CATEGORIES</span>
               <Arrow rotate={catPop} />
            </div>
            <div className="otherQuickOptions">
               {categoriesItems.map((item, i) => (
                  <div key={i}>
                     <span>{item}</span>
                  </div>
               ))}
            </div>
         </div>
         {catPop && <Categories />}
         {props.banner && <div className="banner">
            <img className='banner_poster-lg' src="/img/banner_poster-lg.png" alt="" />
            <img className='banner_poster-sm' src="/img/banner_poster-sm.png" alt="" />
         </div>}
      </div>
   );
};

export default Banner;
