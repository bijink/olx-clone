import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import OLXAd from '../Components/AppAd/OLXAd';
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';
import SignupPage from './SignupPage';
import { useContext } from 'react';
import { PopUpContext } from '../Store/PopUpContext';
import LoginPage from './LoginPage';


function HomePage() {

   const { btnPopUp, pageId } = useContext(PopUpContext);
   var Components;
   if (pageId == 'login') {
      Components = <LoginPage />;
   } else if (pageId == 'signup') {
      Components = <SignupPage />;
   }

   return (
      <div className="homeParentDiv">
         <Header />
         <Banner />
         {
            btnPopUp ? <PopUp>

               {Components}
            </PopUp> : ''
         }
         <Posts />
         <OLXAd />
         <Footer />
      </div >
   );
}

export default HomePage;

