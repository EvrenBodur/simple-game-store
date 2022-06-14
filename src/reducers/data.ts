import * as actionTypes from "../actions/actionTypes";
import * as interfaces from "../actions/interfaces";

const INITIAL_STATE: interfaces.GameState = {
  data: [],
  error: {},
  loading: false,
};

export default (
  state = INITIAL_STATE,
  action: interfaces.GamesDataAction
): interfaces.GameState => {
  switch (action.type) {
    case actionTypes.GET_GAMES_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_GAMES_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.GET_GAMES_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
