import { SET_LOADMORE } from "./Action";

const initialState = {
   noOfItemToLoad: 2
};

const loadMoreReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LOADMORE: return {
         // ...state,
         // load: state + 2
         load: state
      };
      default: return state;
   }
};

export default loadMoreReducer;