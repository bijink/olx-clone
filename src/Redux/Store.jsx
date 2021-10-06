import { createStore } from "redux";
import loadMoreReducer from "./Reducer";

const store = createStore(loadMoreReducer);

export default store;