import React, { useContext, useState } from 'react';
import './Header.scss';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PopUpContext } from '../../Store/PopUpContext';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';
import UserProfile from '../UserProfile/UserProfile';
import { UserProfilePopUpTriggerCon } from '../../Store/UserProfilePopUpTriggerContext';
import { connect } from 'react-redux';
// import PopUpUserProfile from '../../PopUps/PopUpUserProfile/PopUpUserProfile';

const Header = (props) => {
   const history = useHistory();
   const { user } = useContext(AuthContext);
   const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   const { signUpName } = useContext(SignUpUsernameContext);
   // const { firebase } = useContext(FirebaseContext);
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);


   return (
      <div className="headerParentDiv" >
         <div className="headerChildDiv">
            <div className="brandLogo">
               <OlxLogo></OlxLogo>
            </div>
            <div className="placeSearch">
               <div className="search">
                  <Search></Search>
               </div>
               <div className="text">
                  <input type="text" placeholder="Search city, area or locality" />
               </div>
               <div className="arrow">
                  <Arrow></Arrow>
               </div>
            </div>
            <div className="productSearch">
               <div className="input">
                  <input type="text" placeholder="Find car,mobile phone and more..." />
               </div>
               <div className="searchAction">
                  <Search color="#ffffff"></Search>
               </div>
            </div>
            <div className="language">
               <span> ENGLISH </span>
               <Arrow></Arrow>
            </div>
            <div className="loginPage">
               {
                  user ?
                     (user.displayName ? <Login_UserProfile value1={user} /> : <Login_UserProfile value2={signUpName} />)
                     :
                     <span className="login" onClick={() => {
                        // history.push('/login');
                        setBtnPopUp(true);
                        setPageId('login');
                     }}>Login</span>
               }
            </div>

            <div className="sellMenu" onClick={() => {
               user ? history.push('/create') : alert('Please Login to sell item.');
            }}>
               <SellButton></SellButton>
               <div className="sellMenuContent">
                  <SellButtonPlus></SellButtonPlus>
                  <span>SELL</span>
               </div>
            </div>
         </div>
      </div>
   );
};





export default Header;

/* ***** */

const Login_UserProfile = (props) => {
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);

   var component;
   if (props.value1) {
      component = <div className="icon"><h1>{props.value1 && props.value1.displayName.charAt(0).toUpperCase()}</h1></div>;
   } else if (props.value2) {
      component = <div className="icon"><h1>{props.value2.charAt(0).toUpperCase()}</h1></div>;
   }

   return (
      <div className="parentUserProfile">
         <div className="childUserProfile" onClick={() => {
            !userProfilePopUpTrigger ? setUserProfilePopUpTrigger(true) : setUserProfilePopUpTrigger(false);
         }}>
            {component}
            <Arrow rotate={userProfilePopUpTrigger} />
         </div>
         {userProfilePopUpTrigger && <UserProfile />}
      </div>
   );
};
