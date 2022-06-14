import * as actions from "./actionCreators";

export const like = (gameData: any) => async (dispatch: any) => {
  await dispatch(actions.likeGameLoading());

  try {
    const parsedUserData = JSON.parse(localStorage.getItem("userData") || "[]");

    const editUserData = {
      ...parsedUserData,
      likedGames: [...parsedUserData.likedGames, gameData],
    };

    localStorage.setItem("userData", JSON.stringify(editUserData));
    await dispatch(actions.likeGameSuccess(gameData));
  } catch (error: any) {
    await dispatch(actions.likeGameFail(error.message));
  }
};
