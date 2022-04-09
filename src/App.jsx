import { useEffect, useContext } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { AuthContext } from './Context/AuthContext';
import CreatePage from './Pages/CreatePage';
import FavouritePage from './Pages/FavouritePage';
import ViewPostPage from './Pages/ViewPostPage';
import { auth } from './Firebase/Config';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserDetailsDropdown } from './Redux/Actions';


const App = () => {
   const { setUser } = useContext(AuthContext);

   const isUserDetailsDropdown = useSelector(state => state.userDetailsDropdown.userDetailsDropdown);
   // console.log(isUserDetailsDropdown);

   const dispatch = useDispatch();


   useEffect(() => {
      auth.onAuthStateChanged(user => {
         setUser(user);
         // setLoading(true);
      });
   });


   return (
      <div onClick={() => isUserDetailsDropdown && dispatch(toggleUserDetailsDropdown())}>
         <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/create' element={<CreatePage />} />
            <Route exact path='/view' element={<ViewPostPage />} />
            <Route exact path='/favourite' element={<FavouritePage />} />
         </Routes>
      </div>
   );
};

export default App;
