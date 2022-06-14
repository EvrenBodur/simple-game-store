import * as actions from "../actions/interfaces";
import * as actionTypes from "../actions/actionTypes";

export const setLanguage = (language: string): actions.LangAction => {
  localStorage.setItem("language", language);

  return {
    type: actionTypes.SET_LANGUAGE,
    payload: language,
  };
};
