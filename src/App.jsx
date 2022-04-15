import { CreatePage, FavouritePage, HomePage, ViewPostPage } from './pages';
import { useEffect, useContext } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { authContext } from './context';
import { auth } from './config/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserDetailsDropdown } from './redux/actions';


const App = () => {
   const { setUser } = useContext(authContext);

   const isUserDetailsDropdown = useSelector(state => state.userDetailsDropdown.userDetailsDropdown);
   const dispatch = useDispatch();


   useEffect(() => {
      auth.onAuthStateChanged(user => {
         setUser(user);
      });
   });


   return (
      <div onClick={() => isUserDetailsDropdown && dispatch(toggleUserDetailsDropdown())}>
         <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='create' element={<CreatePage />} />
            <Route path='view' element={<ViewPostPage />} />
            <Route path='favourite' element={<FavouritePage />} />
         </Routes>
      </div>
   );
};

export default App;
