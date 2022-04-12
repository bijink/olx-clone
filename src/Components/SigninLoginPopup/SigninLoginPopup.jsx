import Modal from 'react-modal';
import './SigninLoginPopup.scss';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../../Pages/LoginPage';
import SignupPage from '../../Pages/SignupPage';
import { toggleSigninLoginPopup } from '../../Redux/Actions';

const SigninLoginPopup = () => {
   const isOpen_popup = useSelector(state => state.signinLoginPopup.signupLoginPopup.isOpen);
   const pageId_popup = useSelector(state => state.signinLoginPopup.signupLoginPopup.pageId);
   const dispatch = useDispatch();


   const customStyles = {
      content: {
         top: '55%',
         left: '50%',
         right: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         height: '75%',
      },
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }
   };


   Modal.setAppElement('#root');
   return (
      <Modal
         isOpen={isOpen_popup}
         onRequestClose={() => dispatch(toggleSigninLoginPopup())}
         style={customStyles}
         contentLabel="Example Modal"
      >
         <div className="modalInner">
            <div className="btnClose">
               <i className="fas fa-times" onClick={() => dispatch(toggleSigninLoginPopup())}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               {((pageId_popup === 'login') && <LoginPage />) || ((pageId_popup === 'signup') && <SignupPage />)}
            </div>
         </div>
      </Modal>
   );
};

export default SigninLoginPopup;
