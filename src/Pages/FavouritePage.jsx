import React from 'react';
import Favourite from '../Components/Favourite/Favourite';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';

const FavouritePage = () => {
   return (
      <div>
         <Header />
         <Banner />
         <Favourite />
         <Footer />
      </div>
   );
};

export default FavouritePage;
