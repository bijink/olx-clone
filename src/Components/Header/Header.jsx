import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PopUpContext } from '../../Store/PopUpContext';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';

function Header() {

   const history = useHistory();
   const { setUser, user } = useContext(AuthContext);
   const { firebase } = useContext(FirebaseContext);
   const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   const { signUpName, setSignUpName } = useContext(SignUpUsernameContext);
   // const cc = () => {
   //    if (user) {
   //       var c = firebase.auth().currentUser.displayName;
   //    }
   //    return c;
   // };

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
            <div className="loginPage">
               {user ? (user.displayName ? user.displayName : signUpName) : <span onClick={() => {
                  // history.push('/login');
                  setBtnPopUp(true);
                  setPageId('login');
               }}>Login</span>}
               <hr />
            </div>
            {user && <div className="loginPage">
               <span onClick={() => {
                  firebase.auth().signOut();
                  history.push('/');
                  setSignUpName('');
               }}>Log Out</span>
               <hr />
            </div>}
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
}

export default Header;
