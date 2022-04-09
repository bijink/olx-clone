import { TOGGLE_USER_DETAILS_DROPDOWN } from "../Actions/UserDetailsDropdown.action";

const initialState = {
   userDetailsDropdown: false,
};

const userDetailsDropdownReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_USER_DETAILS_DROPDOWN: return {
         ...state,
         userDetailsDropdown: action.payload,
      };
      default: return state;
   }
};

export default userDetailsDropdownReducer;
