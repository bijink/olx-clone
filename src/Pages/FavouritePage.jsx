import React from 'react';
import Favourite from '../Components/Favourite/Favourite';
import Header from '../Components/Header/Header';
import OLXAd from '../Components/AppAd/OLXAd';
import Footer from '../Components/Footer/Footer';

const FavouritePage = () => {
   return (
      <div>
         <Header />
         <Favourite />
         {/* <OLXAd /> */}
         <Footer />
      </div>
   );
};

export default FavouritePage;
