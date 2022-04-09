import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import PostDetailsContextProvider from './Context/PostDetailsContext';
import AuthContextProvider from './Context/AuthContext';
import SignUpUsernameContextProvider from './Context/SignUpUsernameContext';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <AuthContextProvider>
      <PostDetailsContextProvider>
         <SignUpUsernameContextProvider>
            <Provider store={store}>
               <BrowserRouter>
                  <App tab="home" />
               </BrowserRouter>
            </Provider>
         </SignUpUsernameContextProvider>
      </PostDetailsContextProvider>
   </AuthContextProvider>
);
