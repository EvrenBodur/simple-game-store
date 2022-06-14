import * as actions from "./actionCreators";

export const purchase = (gameData: any) => async (dispatch: any) => {
  await dispatch(actions.purchaseLoading());

  try {
    const parsedUserData = JSON.parse(localStorage.getItem("userData") || "[]");

    const editUserData = {
      ...parsedUserData,
      purchasedGames: [...parsedUserData.purchasedGames, gameData],
    };

    localStorage.setItem("userData", JSON.stringify(editUserData));
    await dispatch(actions.purchaseSuccess(gameData));
  } catch (error: any) {
    await dispatch(actions.purchaseFail(error.message));
  }
};
