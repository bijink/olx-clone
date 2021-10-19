import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { AuthContext, FirebaseContext } from './Store/Context';
import CreatePage from './Pages/CreatePage';
import * as ReactBootstrap from 'react-bootstrap';
import FavouritePage from './Pages/FavouritePage';
import { UserProfilePopUpTriggerCon } from './Store/UserProfilePopUpTriggerContext';
import ViewPostPage from './Pages/ViewPostPage';

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
   });

   return (
      <div onClick={() => userProfilePopUpTrigger && setUserProfilePopUpTrigger(false)}>
         {
            loading ?
               <Router>
                  <Route exact path='/'>
                     <HomePage />
                  </Route>
                  <Route path='/create' >
                     <CreatePage />
                  </Route>
                  <Route path='/view' >
                     <ViewPostPage />
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
