import { combineReducers } from "redux";
import language from "./language";
import auth from "./auth";

const reducers = {
  language,
  auth,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
