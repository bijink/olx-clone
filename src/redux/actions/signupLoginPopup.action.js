export const TOGGLE_SIGNUP_LOGIN_POPUP = 'TOGGLE_SIGNUP_LOGIN_POPUP';

export const toggleSignupLoginPopup = (pageId) => {
   return {
      type: TOGGLE_SIGNUP_LOGIN_POPUP,
      payload: pageId
   };
};
