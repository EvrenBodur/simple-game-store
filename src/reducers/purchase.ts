import * as actionTypes from "../actions/actionTypes";
import * as interfaces from "../actions/interfaces";

interface PurchaseProps {
  purchasedGames: string;
  loading: boolean;
  error: {};
}

const localUserData = localStorage.getItem("userData") || "[]";

const INITIAL_STATE: PurchaseProps = {
  purchasedGames: localUserData,
  error: {},
  loading: false,
};

/* export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.PURCHASE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_SUCCESS:
      return {
        ...state,
        purchasedGames: [...state.purchasedGames, action.payload],
      };
    case actionTypes.PURCHASE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}; */
