import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../../config/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { toggleSignupLoginPopup } from '../../redux/actions';
import OLXLogo from '../../assets/image/olx-logo.webp';


const Login = () => {
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   const handleSubmit = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password).then((cred) => {
         // console.log("user Logged in :", cred.user);
      }).then(() => {
         dispatch(toggleSignupLoginPopup());
      }).catch(error => {
         if (error.code === 'auth/wrong-password') {
            alert('Wrong password.');
         } else {
            alert(error.message);
         }
      });
   };

   const handleSubmit2 = (e) => {
      e.preventDefault();
      dispatch(toggleSignupLoginPopup('signup'));
   };


   return (
      <div className="loginParentDiv">
         <div className="imgDiv">
            <img src={OLXLogo} alt="OLX"></img>
         </div>
         <h4 align='center' >Login</h4>
         <form className="login" onSubmit={handleSubmit}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
               className="input"
               type="email"
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
