import React, { useContext, useState } from 'react';
import './Signup.scss';
// import { FirebaseContext } from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { PopUpContext } from '../../Store/PopUpContext';
import { SignUpUsernameContext } from '../../Context/SignUpUsernameContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, colRefUsers } from '../../Firebase/Config';
import { addDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { toggleSigninLoginPopup } from '../../Redux/Actions';
// import { toggleSigninLoginPopup } from '../../Redux/index';
// import { toggleSigninLoginPopup } from '../../Redux/Actions/ToggleStates.action';

const Signup = () => {
   const navigate = useNavigate();

   const dispatch = useDispatch();


   // const { firebase } = useContext(FirebaseContext);
   // const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   // const { setUser } = useContext(AuthContext);
   const { setSignUpName } = useContext(SignUpUsernameContext);

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');

   const handleSignup = () => {
      setTimeout(function () {
         // A fake path directory to work as a reload
         navigate('/redirect');
         navigate('/');
      }, 0);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // setBtnPopUp(false);
      dispatch(toggleSigninLoginPopup());

      setSignUpName(username);
      if (password.length >= 8) {
         // firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
         //    result.user.updateProfile({ displayName: username }).then(() => {
         //       firebase.firestore().collection('users').add({
         //          id: result.user.uid,
         //          username: username,
         //          phone: phone
         //       }).then(() => {
         //          handleSignup();
         //          // navigate('/');
         //       });
         //    });
         // });

         createUserWithEmailAndPassword(auth, email, password).then((cred) => {
            console.log('user Created : ', cred);
            updateProfile(auth.currentUser, { displayName: username }).then(() => {
               addDoc(colRefUsers, {
                  id: cred.user.uid,
                  username: username,
                  phone: phone
               }).then(() => {
                  handleSignup();
               });
            });
         }).catch((err) => {
            console.log(err.message);
         });
      } else {
         alert('Password must exceed 8 character');
         // setBtnPopUp(true);
         // setPageId('signup');
         dispatch(toggleSigninLoginPopup('signup'));
      }
   };

   const handleSubmit2 = (e) => {
      e.preventDefault();
      // navigate('/login');
      // setBtnPopUp(true);
      // setPageId('login');

      dispatch(toggleSigninLoginPopup('login'));
   };

   return (
      <div className="signupParentDiv">
         {/* <i className="fas fa-times btnClose" onClick={() => setBtnPopUp(false)}></i> */}
         <i className="fas fa-times btnClose" onClick={() => dispatch(toggleSigninLoginPopup())}></i>
         <div className="imgDiv">
            <img src='/img/olx-logo.png' alt="OLX"></img>
         </div>
         <h4 align='center'>Signup</h4>
         <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
               className="input"
               type="text"
               name="name"
               required
               // id="fname"
               // defaultValue="John"
               value={username}
               onChange={e => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
               className="input"
               type="email"
               name="email"
               required
               // id="fname"
               // defaultValue="John"
               placeholder="example@email.com"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
               className="input"
               type="number"
               name="phone"
               required
               // id="lname"
               // defaultValue="Doe"
               value={phone}
               onChange={e => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
               className="input"
               type="password"
               name="password"
               required
               // id="lname"
               // defaultValue="Doe"
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Signup</button>
         </form>
         <form className="login" onSubmit={handleSubmit2}>
            <button>Login</button>
         </form>
      </div>
   );
};

export default Signup;
