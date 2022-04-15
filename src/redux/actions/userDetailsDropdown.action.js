export const TOGGLE_USER_DETAILS_DROPDOWN = 'TOGGLE_USER_DETAILS_DROPDOWN';

export const toggleUserDetailsDropdown = (state) => {
   return {
      type: TOGGLE_USER_DETAILS_DROPDOWN,
      payload: state
   };
};
