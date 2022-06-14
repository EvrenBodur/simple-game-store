import * as actions from "./actionCreators";

export const install = (gameData: any) => async (dispatch: any) => {
  await dispatch(actions.installGameLoading());

  try {
    const parsedUserData = JSON.parse(localStorage.getItem("userData") || "[]");
    const editUserData = {
      ...parsedUserData,
      installedGames: [...parsedUserData.installedGames, gameData],
    };

    localStorage.setItem("userData", JSON.stringify(editUserData));

    dispatch(actions.installGameSuccess(editUserData));
  } catch (error: any) {
    dispatch(actions.installGameFail(error.message));
  }
};
