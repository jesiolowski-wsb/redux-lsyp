import postsReducer from "./postsDucks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ postsReducer });
export default rootReducer;
