import React, { useContext } from 'react';
import './Header.scss';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import UserProfile from '../UserProfile/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSigninLoginPopup, toggleUserDetailsDropdown } from '../../Redux/Actions';


const Header = ({ page_home }) => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);

   const isUserDetailsDropdown = useSelector(state => state.userDetailsDropdown.userDetailsDropdown);
   const dispatch = useDispatch();


   return (
      <div className="headerParentDiv" >
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
            <span>ENGLISH</span>
            <Arrow></Arrow>
         </div>

         <div className="loginPage">
            {user?.displayName ? (
               <div className="userIconParent" onClick={() => {
                  dispatch(toggleUserDetailsDropdown(isUserDetailsDropdown ? false : true));
               }}>
                  <div className="userIconChild">
                     <div className="icon"><h1>{user.displayName.charAt(0).toUpperCase()}</h1></div>
                     <Arrow rotate={isUserDetailsDropdown} />
                  </div>
                  {isUserDetailsDropdown && <UserProfile />}
               </div>
            ) : (page_home && (
               <span className="login" onClick={() => {
                  dispatch(toggleSigninLoginPopup('login'));
               }}>Login</span>)
            )}
         </div>

         <div className="sellMenu" onClick={() => {
            user ? navigate('/create') : alert('Please Login to sell item.');
         }}>
            <SellButton></SellButton>
            <div className="sellMenuContent">
               <SellButtonPlus></SellButtonPlus>
               <span>SELL</span>
            </div>
         </div>
      </div>
   );
};

export default Header;
