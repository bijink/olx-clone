import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';
import { UserProfilePopUpTriggerCon } from '../../Store/UserProfilePopUpTriggerContext';
import './UserProfile.scss';


const UserProfile = () => {
   const { user } = useContext(AuthContext);
   const { firebase } = useContext(FirebaseContext);
   const history = useHistory();
   const { signUpName, setSignUpName } = useContext(SignUpUsernameContext);
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);

   // const u = firebase.auth().currentUser;
   // console.log(u);
   // const uu = u.email;

   return (
      <div className="parentDiv">
         <div className="userDetails">
            <div className="icon"><h1>{user ? (user.displayName.charAt(0).toUpperCase()) : ''}</h1></div>
            <div className="details">
               <p>Hello,</p>
               {/* <h2>{user && user.displayName}</h2> */}
               <h2>{user && user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}</h2>
               {/* <h3>{user && uu}</h3> */}
               <h3>{user && user.email}</h3>
            </div>
         </div>
         <div className="features">
            <div className="featuresChild favourite" onClick={() => {
               setUserProfilePopUpTrigger(false);
               history.push('/favourite');
            }}>
               <div className="logo">
                  <i class="far fa-heart"></i>
               </div>
               <span>Favorite</span>
            </div>
            <div className="featuresChild logout" onClick={() => {
               setUserProfilePopUpTrigger(false);
               firebase.auth().signOut();
               history.push('/');
               setSignUpName('');
            }} >
               <div className="logo">
                  <i class="fas fa-sign-out-alt"></i>
               </div>
               <span>Logout</span>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;