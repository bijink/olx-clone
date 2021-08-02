import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import OLXAd from '../Components/AppAd/OLXAd';
// import PopUp from '../PopUps/PopUpSignLog';
// import { useState } from 'react';
import SignupPage from './SignupPage';
import { useContext } from 'react';
import { PopUpContext } from '../Store/PopUpContext';
import LoginPage from './LoginPage';
import PopUpSignLog from '../PopUps/PopUpSignLog/PopUpSignLog';
// import PopUpUserProfile from '../PopUps/PopUpUserProfile/PopUpUserProfile';
// import UserProfile from '../Components/UserProfile/UserProfile';
// import PopUpSignLog from '../PopUps/PopUpSignLog/PopUpSignLog';


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
         <Posts />
         <OLXAd />
         <Footer />
         {
            btnPopUp ? <PopUpSignLog>

               {Components}
            </PopUpSignLog> : ''
         }
      </div >
   );
}

export default HomePage;

