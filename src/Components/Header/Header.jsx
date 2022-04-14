import { useContext, useState } from 'react';
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
import SearchResults from '../SearchList/SearchList';


const Header = ({ page_home }) => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);

   const isUserDetailsDropdown = useSelector(state => state.userDetailsDropdown.userDetailsDropdown);
   const dispatch = useDispatch();

   const [inputText, setInputText] = useState('');
   const [isInputFocus, setIsInputFocus] = useState(false);
   const [isMouseHover, setIsMouseHover] = useState(false);
   const [click, setClick] = useState(false);


   let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
   };


   return (
      <div className="headerParentDiv" >
         <div className="brandLogo">
            <OlxLogo></OlxLogo>
         </div>
         {/* <div className="placeSearch">
            <div className="search">
               <Search></Search>
            </div>
            <div className="text">
               <input type="text" placeholder="Search city, area or locality" />
               </div>
               <div className="arrow">
               <Arrow></Arrow>
            </div>
         </div> */}
         <div className="searchAction" onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)}>
            <Search color="#ffffff"></Search>
         </div>
         <div
            className="productSearch"
            style={{ display: click && 'flex' }}
            onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)}
         >
            {(inputText && isInputFocus) &&
               <SearchResults input={inputText} inputFocus={isInputFocus} setIsMouseHover={setIsMouseHover} />
            }
            <div className="input">
               <input
                  type="text"
                  placeholder="Find car,mobile phone and more..."
                  onChange={inputHandler}
                  onFocus={() => setIsInputFocus(true)}
                  onBlur={() => {
                     !isMouseHover && setIsInputFocus(false);
                  }}
               />
            </div>
            {/* <div className="searchAction">
               <Search color="#ffffff"></Search>
            </div> */}
         </div>

         {!click && (
            <>
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
            </>
         )}
      </div>
   );
};

export default Header;
