// ** Reducers ** //

import { combineReducers } from "redux";
import postLoadMoreReducer from "./postLoadMore.reducer";
import signinLoginPopupReducer from "./signupLoginPopup.reducer";
import userDetailsDropdownReducer from "./userDetailsDropdown.reducer";

const rootReducer = combineReducers({
   postLoadMore: postLoadMoreReducer,
   signinLoginPopup: signinLoginPopupReducer,
   userDetailsDropdown: userDetailsDropdownReducer,
});

export default rootReducer;
