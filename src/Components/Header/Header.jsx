import React, { useContext } from 'react';
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
// import PopUpUserProfile from '../../PopUps/PopUpUserProfile/PopUpUserProfile';

const Header = () => {
   const history = useHistory();
   const { user } = useContext(AuthContext);
   const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   const { signUpName } = useContext(SignUpUsernameContext);
   // const { firebase } = useContext(FirebaseContext);
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);

   return (
      <div className="headerParentDiv">
         <div className="headerChildDiv">
            <div className="brandLogo">
               <OlxLogo></OlxLogo>
            </div>
            <div className="placeSearch">
               <Search></Search>
               <input type="text" />
               <Arrow></Arrow>
            </div>
            <div className="productSearch">
               <div className="input">
                  <input
                     type="text"
                     placeholder="Find car,mobile phone and more..."
                  />
               </div>
               <div className="searchAction">
                  <Search color="#ffffff"></Search>
               </div>
            </div>
            <div className="language">
               <span> ENGLISH </span>
               <Arrow></Arrow>
            </div>

            {/* <div className="parentUserProfile">
               <div className="childUserProfile" onClick={() => {
                  !userProfilePopUpTrigger ? setUserProfilePopUpTrigger(true) : setUserProfilePopUpTrigger(false);
               }}>
                  <div className="icon"></div>
                  <Arrow></Arrow>
               </div>
               {
                  userProfilePopUpTrigger && (<PopUpUserProfile>
                     <UserProfile />
                  </PopUpUserProfile>)
               }
            </div> */}

            <div className="loginPage">
               {/* {user ? (user.displayName ? user.displayName : signUpName) : <span onClick={() => { */}
               {
                  user ?
                     (user.displayName ? <Login_UserProfile value1={user} /> : <Login_UserProfile value2={signUpName} />)
                     :
                     <span onClick={() => {
                        // history.push('/login');
                        setBtnPopUp(true);
                        setPageId('login');
                     }}>Login</span>
               }
            </div>

            {/* {user && <div className="loginPage">
               <span onClick={() => {
                  firebase.auth().signOut();
                  history.push('/');
                  setSignUpName('');
               }}>Log Out</span>
               <hr />
            </div>} */}

            <div className="sellMenu" onClick={() => {
               history.push('/create');
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
            {/* <div className="icon"><h1>{user && user.displayName.charAt(0).toUpperCase()}</h1></div>
               <div className="icon"><h1>{signUpName.charAt(0).toUpperCase()}</h1></div> */}
            {component}
            <Arrow></Arrow>
         </div>
         {userProfilePopUpTrigger && <UserProfile />}
      </div>
   );
};