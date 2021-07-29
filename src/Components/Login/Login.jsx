import React, { useState, useContext } from 'react';
import './Login.css';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';

function Login() {

   const history = useHistory();
   const history2 = useHistory();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { firebase } = useContext(FirebaseContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password);
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
         // console.log('logged in');
         history.push('/');
      }).catch(error => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
         } else {
            alert(errorMessage);
         }
         console.log(error);
      });
   };

   return (
      <div>
         <div className="loginParentDiv">
            <img width="200px" height="200px" src={Logo}></img>
            <form onSubmit={handleSubmit}>
               <label htmlFor="fname">Email</label>
               <br />
               <input
                  className="input"
                  type="email"
                  id="fname"
                  name="email"
                  defaultValue="John"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <br />
               <label htmlFor="lname">Password</label>
               <br />
               <input
                  className="input"
                  type="password"
                  id="lname"
                  name="password"
                  defaultValue="Doe"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <br />
               <br />
               <button>Login</button>
            </form>
            <a>Signup</a>
         </div>
      </div>
   );
}

export default Login;
