import React, { useState } from 'react';
import './Banner.scss';
import Arrow from '../../assets/icons/Arrow';
import Categories from '../Categories';
import BannerPosterLg from '../../assets/image/banner_poster-lg.webp';
import BannerPosterSm from '../../assets/image/banner_poster-sm.webp';


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
            <img className='banner_poster-lg' src={BannerPosterLg} alt="" />
            <img className='banner_poster-sm' src={BannerPosterSm} alt="" />
         </div>}
      </div>
   );
};

export default Banner;
