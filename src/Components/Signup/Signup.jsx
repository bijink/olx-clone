import React, { useContext, useState } from 'react';
import './Signup.scss';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';
import { PopUpContext } from '../../Store/PopUpContext';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';

const Signup = () => {
   const history = useHistory();

   const { firebase } = useContext(FirebaseContext);
   const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   // const { setUser } = useContext(AuthContext);
   const { setSignUpName } = useContext(SignUpUsernameContext);

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');

   const handleSignup = () => {
      setTimeout(function () {
         // A fake path directory to work as a reload
         history.push('/redirect');
         history.push('/');
      }, 0);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setBtnPopUp(false);
      setSignUpName(username);
      if (password.length >= 8) {
         firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            result.user.updateProfile({ displayName: username }).then(() => {
               firebase.firestore().collection('users').add({
                  id: result.user.uid,
                  username: username,
                  phone: phone
               }).then(() => {
                  handleSignup();
                  // history.push('/');
               });
            });
         });
      } else {
         alert('Password must exceed 8 character');
         setBtnPopUp(true);
         setPageId('signup');
      }
   };

   const handleSubmit2 = (e) => {
      e.preventDefault();
      // history.push('/login');
      setBtnPopUp(true);
      setPageId('login');
   };

   return (
      <div className="signupParentDiv">
         <i class="fas fa-times btnClose" onClick={() => setBtnPopUp(false)}></i>
         <div className="imgDiv">
            <img src={Logo} alt="OLX"></img>
         </div>
         <h4 align='center' >Signup</h4>
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
