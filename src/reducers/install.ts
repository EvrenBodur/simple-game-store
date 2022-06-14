import * as actionTypes from "../actions/actionTypes";
import * as interfaces from "../actions/interfaces";

interface InstallProps {
  installedGames: string[];
  loading: boolean;
  error: {};
}

const localinstalledGames = localStorage.getItem("installedGames") || "[]";

const INITIAL_STATE: InstallProps = {
  installedGames: JSON.parse(localinstalledGames),
  error: {},
  loading: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.INSTALL_GAME_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.INSTALL_GAME_SUCCESS:
      return {
        ...state,
        installedGames: [...state.installedGames, action.payload],
        purchased: true,
      };
    case actionTypes.INSTALL_GAME_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
