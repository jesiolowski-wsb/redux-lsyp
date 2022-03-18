import postsReducer from "./postsDucks";
import todosReducer from "./todosDucks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ postsReducer, todosReducer });
export default rootReducer;
