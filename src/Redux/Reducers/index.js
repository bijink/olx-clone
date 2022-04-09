// ** Reducers ** //

import { combineReducers } from "redux";
import postLoadMoreReducer from "./PostLoadMore.reducer";
import signinLoginPopupReducer from "./SigninLoginPopup.reducer";
import userDetailsDropdownReducer from "./UserDetailsDropdown.reducer";
import favLocalRemoveIdReducer from "../FavLocalIdRemove/FavLocalIdRemoveReducer";

const rootReducer = combineReducers({
   postLoadMore: postLoadMoreReducer,
   signinLoginPopup: signinLoginPopupReducer,
   userDetailsDropdown: userDetailsDropdownReducer,
   favLocalRemoveId: favLocalRemoveIdReducer,
});

export default rootReducer;
