import React, { useState, useContext } from 'react';
import './Login.scss';
// import Logo from '/img/olx-logo.png';
// import { FirebaseContext } from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { PopUpContext } from '../../Store/PopUpContext';
import { auth } from '../../Firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { toggleSigninLoginPopup } from '../../Redux/Actions/ToggleStates.action';
import { useDispatch } from 'react-redux';
import { toggleSigninLoginPopup } from '../../Redux/Actions';
// import { toggleSigninLoginPopup } from '../../Redux';
// import { toggleSigninLoginPopup } from '../../Redux/index';

const Login = () => {
   const navigate = useNavigate();

   const dispatch = useDispatch();

   // const { firebase } = useContext(FirebaseContext);
   // const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   // const { setUser } = useContext(AuthContext);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = () => {
      setTimeout(() => {
         // A fake path directory to work as a reload
         navigate('/redirect');
         navigate('/');
      }, 0);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // setBtnPopUp(false);
      dispatch(toggleSigninLoginPopup());

      // console.log(email, password);
      // firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      //    handleLogin();
      //    // navigate('/');
      // }).catch(error => {
      //    // Handle Errors here.
      //    var errorCode = error.code;
      //    var errorMessage = error.message;
      //    if (errorCode === 'auth/wrong-password') {
      //       alert('Wrong password.');
      //    } else {
      //       alert(errorMessage);
      //    }
      //    // console.log(error);
      // });

      signInWithEmailAndPassword(auth, email, password).then((cred) => {
         // console.log("user Logged in :", cred.user);
         handleLogin();
         //    // navigate('/');
      }).catch(error => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
         } else {
            alert(errorMessage);
         }
         // console.log(error);
      });
   };

   const handleSubmit2 = (e) => {
      e.preventDefault();
      // navigate('/signup');
      // setBtnPopUp(true);
      // setPageId('signup');

      dispatch(toggleSigninLoginPopup('signup'));
   };

   return (
      <div className="loginParentDiv">
         {/* <i className="fas fa-times btnClose" onClick={() => setBtnPopUp(false)}></i> */}
         <i className="fas fa-times btnClose" onClick={() => dispatch(toggleSigninLoginPopup())}></i>
         <div className="imgDiv">
            <img src='/img/olx-logo.png' alt="OLX"></img>
         </div>
         <h4 align='center' >Login</h4>
         <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
               className="input"
               type="email"
               // id="fname"
               // defaultValue="John"
               name="email"
               placeholder="example@email.com"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
               className="input"
               type="password"
               // id="lname"
               // defaultValue="Doe"
               name="password"
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Login</button>
         </form>
         <form className="signup" onSubmit={handleSubmit2}>
            <button>Signup</button>
         </form>
      </div>
   );
};

export default Login;
