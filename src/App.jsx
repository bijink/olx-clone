import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { AuthContext, FirebaseContext } from './Store/Context';
import CreatePage from './Pages/CreatePage';
import ViewPost from './Pages/ViewPost';

function App() {

   const { setUser } = useContext(AuthContext);
   const { firebase } = useContext(FirebaseContext);

   useEffect(() => {
      // console.log(user);
      firebase.auth().onAuthStateChanged(user => {
         setUser(user);
      });
   });

   return (
      <div>
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
         </Router>
      </div>
   );
}

export default App;
