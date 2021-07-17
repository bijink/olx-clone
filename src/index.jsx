import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from "./Store/Context";
import firebase from './Firebase/Config';

ReactDOM.render(
   <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
         <Context>
            <App />
         </Context>
      </FirebaseContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);