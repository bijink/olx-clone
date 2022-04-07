// import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Apps from './Apps';
import Context, { FirebaseContext } from "./Store/Context";
// import firebase from './Firebase/Config';
import { app } from './Firebase/Config';
import PostCon from './Store/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Store/LoadContext';
import PopUpCon from './Store/PopUpContext';
import UserProfilePopUpTriggerContext from './Store/UserProfilePopUpTriggerContext';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import SignUpUsernameContextCon from './Store/SignUpUsernameContext';


// const container = document.getElementById('app');
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Apps tab="home" />);

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//    <FirebaseContext.Provider value={{ app }}>
//       {/* <FirebaseContext.Provider value={{ firebase }}> */}
//       <Context>
//          <PostCon>
//             <Loading>
//                <PopUpCon>
//                   <SignUpUsernameContextCon>
//                      <UserProfilePopUpTriggerContext>
//                         <Provider store={store}>
//                            <App tab="home" />
//                         </Provider>
//                      </UserProfilePopUpTriggerContext>
//                   </SignUpUsernameContextCon>
//                </PopUpCon>
//             </Loading>
//          </PostCon>
//       </Context>
//    </FirebaseContext.Provider>
// );
