import { useContext } from 'react';
import './UserProfile.scss';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';


const UserProfile = () => {
   const navigate = useNavigate();

   const { user } = useContext(authContext);


   return (
      <div className="userProfileParentDiv">
         <div className="userProfileChildDiv">
            <div className="userDetails">
               <div className="icon"><h1>{(user.displayName.charAt(0).toUpperCase())}</h1></div>
               <div className="details">
                  <p>Hello,</p>
                  <h2>{user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}</h2>
                  <h3>{user.email}</h3>
               </div>
            </div>
            <div className="features">
               <div className="rows favourite" onClick={() => {
                  navigate('/favourite');
               }}>
                  <div className="logo">
                     <i className="far fa-heart"></i>
                  </div>
                  <span>Favorite</span>
               </div>
               <div className="rows logout" onClick={() => {
                  let confirmLogout = window.confirm("Are you sure you want to logout ?");
                  if (confirmLogout) {
                     signOut(auth).then(() => {
                        navigate('/');
                     }).catch(err => {
                        console.log(err.message);
                     });
                  }
               }} >
                  <div className="logo">
                     <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <span>Logout</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;
