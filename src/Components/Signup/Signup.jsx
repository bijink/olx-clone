import React, { useState } from 'react';
import './Signup.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../Firebase/Config';
import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { toggleSigninLoginPopup } from '../../Redux/Actions';


const Signup = () => {
   const dispatch = useDispatch();

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');

   const date = new Date();


   const handleSubmit1 = (e) => {
      e.preventDefault();

      if (password.length >= 8) {
         createUserWithEmailAndPassword(auth, email, password).then((cred) => {
            // console.log('user Created : ', cred);
            updateProfile(auth.currentUser, { displayName: username }).then(() => {
               addDoc(collection(db, 'users'), {
                  userId: cred.user.uid,
                  username: username,
                  phone: phone,
                  email: email,
                  accountCreatedAt: date.toDateString(),
               }).then(() => {
                  dispatch(toggleSigninLoginPopup());
               });
            });
         }).catch((err) => {
            alert(err.message);
         });
      } else {
         alert('Password must exceed 8 character');
         dispatch(toggleSigninLoginPopup('signup'));
      }
   };

   const handleSubmit2 = (e) => {
      e.preventDefault();
      dispatch(toggleSigninLoginPopup('login'));
   };


   return (
      <div className="signupParentDiv">
         <div className="imgDiv">
            <img src='/img/olx-logo.png' alt="OLX"></img>
         </div>
         <h4 align='center'>Signup</h4>
         <form className="signin" onSubmit={handleSubmit1}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
               className="input"
               type="text"
               name="name"
               required
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
