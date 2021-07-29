import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from "./Store/Context";
import firebase from './Firebase/Config';
import PostCon from './Store/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Store/LoadContext';

ReactDOM.render(
   <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
         <Context>
            <PostCon>
               <Loading>
                  <App />
               </Loading>
            </PostCon>
         </Context>
      </FirebaseContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);