import React, { useEffect, useContext, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { AuthContext, FirebaseContext } from './Store/Context';
import CreatePage from './Pages/CreatePage';
import ViewPost from './Pages/ViewPost';
import * as ReactBootstrap from 'react-bootstrap';
import FavouritePage from './Pages/FavouritePage';
import { UserProfilePopUpTriggerCon } from './Store/UserProfilePopUpTriggerContext';

const App = () => {
   const { setUser } = useContext(AuthContext);
   const { firebase } = useContext(FirebaseContext);
   const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);
   const [loading, setLoading] = useState(null);

   useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
         setUser(user);
         setLoading(true);
      });
      // const u = firebase.auth().currentUser;
      // console.log(u);
   });

   return (
      <div onClick={() => userProfilePopUpTrigger && setUserProfilePopUpTrigger(false)}>
         {
            loading ?
               <Router>
                  <Route exact path='/'>
                     <HomePage />
                  </Route>
                  <Route path='/signup' >
                     <SignupPage />
                  </Route>
                  <Route path='/login' >
                     <LoginPage />
                  </Route>
                  <Route path='/create' >
                     <CreatePage />
                  </Route>
                  <Route path='/view' >
                     <ViewPost />
                  </Route>
                  <Route path='/favourite' >
                     <FavouritePage />
                  </Route>
               </Router>
               :
               <div className="parentSpinnerDiv">
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="danger" size="sm" /></div>
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="primary" size="lg" /></div>
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="danger" size="sm" /></div>
               </div>
         }
      </div>
   );
};

export default App;
