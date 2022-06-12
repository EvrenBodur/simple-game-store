import * as actionTypes from "../actions/actionTypes";

export const setLanguage = (language: string): actionTypes.LangAction => {
  localStorage.setItem("language", language);

  return {
    type: actionTypes.SET_LANGUAGE,
    payload: language,
  };
};
