// ** Reducers ** //

import { combineReducers } from "redux";
import postLoadMoreReducer from "./PostLoadMore.reducer";
import signinLoginPopupReducer from "./SigninLoginPopup.reducer";
import userDetailsDropdownReducer from "./UserDetailsDropdown.reducer";

const rootReducer = combineReducers({
   postLoadMore: postLoadMoreReducer,
   signinLoginPopup: signinLoginPopupReducer,
   userDetailsDropdown: userDetailsDropdownReducer,
});

export default rootReducer;
