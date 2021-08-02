import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';
import { UserProfilePopUpTriggerCon } from '../../Store/UserProfilePopUpTriggerContext';
import './UserProfile.css';


function UserProfile() {

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
         <div className="UserDetails">
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
            <span className="logout">
               <div className="logo">
                  <i class="fas fa-sign-out-alt"></i>
               </div>
               <span onClick={() => {
                  setUserProfilePopUpTrigger(false);
                  firebase.auth().signOut();
                  history.push('/');
                  setSignUpName('');
               }}>Logout</span>
            </span>
         </div>
      </div>
   );
}

export default UserProfile;
