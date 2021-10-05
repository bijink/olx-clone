import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from "./Store/Context";
import firebase from './Firebase/Config';
import PostCon from './Store/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Store/LoadContext';
import PopUpCon from './Store/PopUpContext';
// import Logged from './Store/IfLoggedIn';
import SignUpUsername from './Store/SignUpUsernameContext';
import UserProfilePopUpTriggerContext from './Store/UserProfilePopUpTriggerContext';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
   <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
         <Context>
            <PostCon>
               <Loading>
                  <PopUpCon>
                     <SignUpUsername>
                        <UserProfilePopUpTriggerContext>
                           {/* <Provider store={store}> */}
                           <App />
                           {/* </Provider> */}
                        </UserProfilePopUpTriggerContext>
                     </SignUpUsername>
                  </PopUpCon>
               </Loading>
            </PostCon>
         </Context>
      </FirebaseContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);