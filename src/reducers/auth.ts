import { access } from "fs";
import * as actionTypes from "../actions/actionTypes";

const localStorageUserData = localStorage.getItem("userData");

const INITIAL_STATE: actionTypes.UserState = {
  user: localStorageUserData || "",
  error: "",
};

const createUserReducer = (
  state = INITIAL_STATE,
  action: actionTypes.RegisterAction
) => {
  switch (action.type as string) {
    case actionTypes.CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createUserReducer;
