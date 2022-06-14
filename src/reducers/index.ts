import { combineReducers } from "redux";
import language from "./language";
import auth from "./auth";
import data from "./data";
//import purchase from "./purchase";
import install from "./install";

const reducers = {
  language,
  auth,
  data,
  //purchase,
  install,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
