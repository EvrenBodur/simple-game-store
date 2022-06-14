import * as actiontypes from "./actionTypes";

//Create User
export const createUserLoading = () => ({
  type: actiontypes.CREATE_USER_LOADING,
});

export const createUserSuccess = (data: any) => ({
  type: actiontypes.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserFail = (err: any) => ({
  type: actiontypes.CREATE_USER_FAILED,
  payload: err,
});

//Login
export const loginLoading = () => ({
  type: actiontypes.LOGIN_LOADING,
});

export const loginSuccess = (data: any) => ({
  type: actiontypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (err: any) => ({
  type: actiontypes.LOGIN_FAILED,
  payload: err,
});

//Game Data
export const getGamesDataLoading = () => ({
  type: actiontypes.GET_GAMES_DATA_LOADING,
});

export const getGamesDataSuccess = (data: any) => ({
  type: actiontypes.GET_GAMES_DATA_SUCCESS,
  payload: data,
});

export const getGamesDataFailed = (error: any) => ({
  type: actiontypes.GET_GAMES_DATA_FAILED,
  payload: error,
});

// Purchase and install

export const purchaseLoading = () => ({
  type: actiontypes.PURCHASE_LOADING,
});

export const purchaseSuccess = (data: any) => ({
  type: actiontypes.PURCHASE_SUCCESS,
  payload: data,
});

export const purchaseFail = (error: any) => ({
  type: actiontypes.PURCHASE_FAILED,
  payload: error,
});

export const installGameLoading = () => ({
  type: actiontypes.INSTALL_GAME_LOADING,
});

export const installGameSuccess = (data: any) => ({
  type: actiontypes.INSTALL_GAME_SUCCESS,
  payload: data,
});

export const installGameFail = (error: any) => ({
  type: actiontypes.INSTALL_GAME_FAILED,
  payload: error,
});

export const likeGameLoading = () => ({
  type: actiontypes.LIKE_GAME_LOADING,
});

export const likeGameSuccess = (data: any) => ({
  type: actiontypes.LIKE_GAME_SUCCESS,
  payload: data,
});

export const likeGameFail = (error: any) => ({
  type: actiontypes.LIKE_GAME_FAILED,
  payload: error,
});
