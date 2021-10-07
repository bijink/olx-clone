import { combineReducers } from "redux";
import loadMoreFavReducer from "./LoadMoreFav/LoadMoreFavReducer";
import loadMorePostReducer from "./LoadMorePost/LoadMorrPostReducer";

const rootReducer = combineReducers({
   post: loadMorePostReducer,
   favorite: loadMoreFavReducer
});

export default rootReducer;