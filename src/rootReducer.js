import postsReducer from "./ducks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ postsReducer });
export default rootReducer;
