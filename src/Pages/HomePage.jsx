import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import OLXAd from '../Components/AppAd/OLXAd';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import PopUpSignLog from '../PopUps/PopUpSignLog/PopUpSignLog';
import { useSelector } from 'react-redux';


const HomePage = () => {
   const isOpen_popup = useSelector(state => state.signinLoginPopup.signupLoginPopup.isOpen);
   const pageId_popup = useSelector(state => state.signinLoginPopup.signupLoginPopup.pageId);


   return (
      <div className="homeParentDiv">
         <Header />
         <Banner banner />
         <Posts />
         <OLXAd />
         <Footer />

         {isOpen_popup &&
            <PopUpSignLog>
               {((pageId_popup === 'login') && <LoginPage />) || ((pageId_popup === 'signup') && <SignupPage />)}
            </PopUpSignLog>}
      </div >
   );
};

export default HomePage;
