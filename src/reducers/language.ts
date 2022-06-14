import * as actionTypes from "../actions/actionTypes";
import * as interfaces from "../actions/interfaces";

const localStorageLanguage = localStorage.getItem("language");

const INITIAL_STATE: interfaces.LangState = {
  language: localStorageLanguage || "en",
};

const languageReducer = (
  state = INITIAL_STATE,
  action: interfaces.LangAction
) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
