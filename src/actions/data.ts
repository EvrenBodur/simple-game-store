import axios from "axios";
import * as actions from "./actionCreators";

export const getGamesData = () => async (dispatch: any) => {
  dispatch(actions.getGamesDataLoading());
  try {
    await axios.get("simple_game_store_db.json").then((response) => {
      console.log(response.data);
      dispatch(actions.getGamesDataSuccess(response.data));
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      dispatch(actions.getGamesDataFailed(error.message));
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
