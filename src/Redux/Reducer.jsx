import { SET_LOADMORE } from "./Action";

const initialState = {
   // noOfItemToLoad: 10
   noOfItemToLoad: 2
};

const loadMoreReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADMORE: return {
         ...state,
         // noOfItemToLoad: state.noOfItemToLoad + 10
         noOfItemToLoad: state.noOfItemToLoad + 2
      };
      default: return state;
   }
};

export default loadMoreReducer;