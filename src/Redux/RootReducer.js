import { combineReducers } from "redux";
import favLocalRemoveIdReducer from "./FavLocalIdRemove/FavLocalIdRemoveReducer";
import loadMoreFavReducer from "./LoadMoreFav/LoadMoreFavReducer";
import loadMorePostReducer from "./LoadMorePost/LoadMorrPostReducer";

const rootReducer = combineReducers({
   post: loadMorePostReducer,
   favorite: loadMoreFavReducer,
   favLocalRemoveId: favLocalRemoveIdReducer
});

export default rootReducer;