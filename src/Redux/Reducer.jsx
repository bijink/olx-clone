import { SET_USER } from "./Action";

const initialState = {

};

const userReducer = (state, action) => {
   switch (action.type) {
      case SET_USER: return {
         ...state,
         user: action.payload
      };
   }
};

export default userReducer;