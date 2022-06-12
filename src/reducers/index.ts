import { combineReducers } from "redux";
import language from "./language";

const reducers = {
  language,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
