import React, { useEffect, useContext, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { AuthContext, FirebaseContext } from './Store/Context';
import CreatePage from './Pages/CreatePage';
// import * as ReactBootstrap from 'react-bootstrap';
import FavouritePage from './Pages/FavouritePage';
import { UserProfilePopUpTriggerCon } from './Store/UserProfilePopUpTriggerContext';
import ViewPostPage from './Pages/ViewPostPage';
import { auth } from './Firebase/Config';
import { signOut } from 'firebase/auth';


const App = () => {
   const { setUser } = useContext(AuthContext);
   // const { firebase } = useContext(FirebaseContext);
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);

   const [loading, setLoading] = useState(null);

   useEffect(() => {
      // firebase.auth().onAuthStateChanged(user => {
      auth.onAuthStateChanged(user => {
         setUser(user);
         setLoading(true);
      });

      // signOut(auth).then(() => {
      //    // console.log('The user signed out');
      // }).catch(err => {
      //    console.log(err.message);
      // });
   });

   // console.log(auth?.currentUser?.email);
   // console.log(auth.currentUser);
   // console.log(auth);

   return (
      <div onClick={() => userProfilePopUpTrigger && setUserProfilePopUpTrigger(false)}>
         <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/create' element={<CreatePage />} />
            <Route exact path='/view' element={<ViewPostPage />} />
            <Route exact path='/favourite' element={<FavouritePage />} />
         </Routes>
      </div>
   );
};

export default App;
