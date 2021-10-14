import { SET_FAV_LOCAL_REMOVE_ID } from "./FavLocalIdRemoveAction";

const initialState = {
   favLocalRemoveId: ''
};

const favLocalRemoveIdReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_FAV_LOCAL_REMOVE_ID: return {
         ...state,
         favLocalRemoveId: action.payload
      };
      default: return state;
   }
};

export default favLocalRemoveIdReducer;