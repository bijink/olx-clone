export const TOGGLE_SIGNUP_LOGIN_POPUP = 'TOGGLE_SIGNUP_LOGIN_POPUP';

export const toggleSigninLoginPopup = (pageId) => {
   return {
      type: TOGGLE_SIGNUP_LOGIN_POPUP,
      payload: pageId
   };
};
