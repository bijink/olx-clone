import { TOGGLE_SIGNUP_LOGIN_POPUP } from "../Actions/SigninLoginPopup.action";

const initialState = {
   signupLoginPopup: {
      isOpen: false,
      pageId: '',
   },
};

const signupLoginPopupReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_SIGNUP_LOGIN_POPUP: return {
         ...state,
         signupLoginPopup: {
            isOpen: action.payload ? true : false,
            pageId: action.payload,
         },
      };
      default: return state;
   }
};

export default signupLoginPopupReducer;
