import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import OLXAd from '../Components/AppAd/OLXAd';
import SigninLoginPopup from '../Components/SigninLoginPopup/SigninLoginPopup';
import { useSelector } from 'react-redux';

const HomePage = () => {
   const isOpen_popup = useSelector(state => state.signinLoginPopup.signupLoginPopup.isOpen);

   return (
      <>
         <Header page_home />
         <Banner banner />
         <Posts />
         <OLXAd />
         <Footer />
         {isOpen_popup && <SigninLoginPopup />}
      </>
   );
};

export default HomePage;
