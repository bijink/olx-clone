import { SET_LOADMORE_POST } from "./LoadMorePostAction";

const initialState = {
   noOfItemToLoad: 16
   // noOfItemToLoadPost: 2,
};

const loadMorePostReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADMORE_POST: return {
         ...state,
         noOfItemToLoad: state.noOfItemToLoad + 16
         // noOfItemToLoadPost: state.noOfItemToLoadPost + 2
      };
      default: return state;
   }
};

export default loadMorePostReducer;