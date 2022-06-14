import * as actionTypes from "../actions/actionTypes";
import * as interfaces from "../actions/interfaces";

const localStorageUserData = localStorage.getItem("userData");

const INITIAL_STATE: any = {
  user: localStorageUserData || "",
  error: "",
  loading: false,
};

const createUserReducer = (
  state = INITIAL_STATE,
  action: interfaces.RegisterAction
) => {
  switch (action.type as string) {
    case actionTypes.CREATE_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        user: JSON.parse(action.payload),
        loading: false,
      };
    case actionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.PURCHASE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_SUCCESS:
      return {
        ...state.user,
        purchasedGames: [...state.user.purchasedGames, action.payload],
        loading: false,
      };
    case actionTypes.PURCHASE_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default createUserReducer;
