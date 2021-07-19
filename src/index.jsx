import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from "./Store/Context";
import firebase from './Firebase/Config';
import PostCon from './Store/PostContext';

ReactDOM.render(
   <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
         <Context>
            <PostCon>
               <App />
            </PostCon>
         </Context>
      </FirebaseContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);