import React, { useContext, useState } from 'react';
import './Signup.scss';
import Logo from '../../olx-logo.png';
// import Logo from '../../../public/Images/olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';
import { PopUpContext } from '../../Store/PopUpContext';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';

const Signup = () => {
   const history = useHistory();
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const { firebase } = useContext(FirebaseContext);
   const { setBtnPopUp, setPageId } = useContext(PopUpContext);
   // const { setUser } = useContext(AuthContext);
   const { setSignUpName } = useContext(SignUpUsernameContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      setBtnPopUp(false);
      setSignUpName(username);
      // setBtnPopUp(true);
      // setPageId('login');
      // setUser(user)
      // console.log(username, email, phone, password);
      // console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
         result.user.updateProfile({ displayName: username }).then(() => {
            firebase.firestore().collection('users').add({
               id: result.user.uid,
               username: username,
               phone: phone
            }).then(() => {
               history.push('/');
            });
         });
      });
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
               id="fname"
               name="name"
               required
               defaultValue="John"
               value={username}
               onChange={e => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
               className="input"
               type="email"
               id="fname"
               name="email"
               required
               defaultValue="John"
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
               id="lname"
               name="phone"
               required
               defaultValue="Doe"
               value={phone}
               onChange={e => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
               className="input"
               type="password"
               id="lname"
               name="password"
               required
               defaultValue="Doe"
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
