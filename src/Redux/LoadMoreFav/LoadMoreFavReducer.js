import { SET_LOADMORE_FAV } from "./LoadMoreFavAction";

const initialState = {
   noOfItemToLoad: 12
   // noOfItemToLoadFav: 1,
};

const loadMoreFavReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADMORE_FAV: return {
         ...state,
         noOfItemToLoad: state.noOfItemToLoad + 12
         // noOfItemToLoadFav: state.noOfItemToLoadFav + 1
      };
      default: return state;
   }
};

export default loadMoreFavReducer;