// import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import Apps from './Apps';
import Context, { FirebaseContext } from "./Store/Context";
// import firebase from './Firebase/Config';
import { app } from './Firebase/Config';
import PostCon from './Store/PostContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Store/LoadContext';
import PopUpCon from './Store/PopUpContext';
import UserProfilePopUpTriggerContext from './Store/UserProfilePopUpTriggerContext';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import SignUpUsernameContextCon from './Store/SignUpUsernameContext';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <Context>
      <PostCon>
         <Loading>
            <PopUpCon>
               <SignUpUsernameContextCon>
                  <UserProfilePopUpTriggerContext>
                     <Provider store={store}>
                        <BrowserRouter>
                           <App tab="home" />
                        </BrowserRouter>
                     </Provider>
                  </UserProfilePopUpTriggerContext>
               </SignUpUsernameContextCon>
            </PopUpCon>
         </Loading>
      </PostCon>
   </Context>
);
