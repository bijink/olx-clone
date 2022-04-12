import { SET_LOADMORE_POST, SET_LOADMORE_FAV } from '../Actions/PostLoadMore.action';

const initialState = {
   noOfItemToLoad_post: 16,
   // noOfItemToLoad_post: 2,
   noOfItemToLoad_fav: 12,
   // noOfItemToLoad_fav: 2,
};

const postLoadMoreReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADMORE_POST: return {
         ...state,
         noOfItemToLoad_post: state.noOfItemToLoad_post + 16
         // noOfItemToLoad_post: state.noOfItemToLoad_post + 1
      };
      case SET_LOADMORE_FAV: return {
         ...state,
         noOfItemToLoad_fav: state.noOfItemToLoad_fav + 12
         // noOfItemToLoad_fav: state.noOfItemToLoad_fav + 1
      };
      default: return state;
   }
};

export default postLoadMoreReducer;
