import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AuthContextProvider from './context/auth.context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <AuthContextProvider>
      <Provider store={store}>
         <BrowserRouter>
            <App tab="home" />
         </BrowserRouter>
      </Provider>
   </AuthContextProvider>
);
