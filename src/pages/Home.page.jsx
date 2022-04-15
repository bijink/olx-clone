import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Posts from '../components/Posts';
import OLXAd from '../components/OLXAd';
import SignupLoginPopup from '../components/SignupLoginPopup';
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
         {isOpen_popup && <SignupLoginPopup />}
      </>
   );
};

export default HomePage;
