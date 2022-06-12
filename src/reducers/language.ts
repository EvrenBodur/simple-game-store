import * as actionTypes from "../actions/actionTypes";

const localStorageLanguage = localStorage.getItem("language");

const INITIAL_STATE: actionTypes.LangState = {
  language: localStorageLanguage || "en",
};

const languageReducer = (
  state = INITIAL_STATE,
  action: actionTypes.LangAction
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
