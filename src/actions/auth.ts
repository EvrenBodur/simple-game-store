import * as interfaces from "../actions/interfaces";
import * as actions from "../actions/actionCreators";

export const createUser = (user: string) => async (dispatch: any) => {
  await dispatch(actions.createUserLoading());
  try {
    localStorage.setItem("userData", user);
    window.location.href = "/login";
    await dispatch(actions.createUserSuccess(user));
  } catch (error) {
    await dispatch(actions.createUserFail(error));
  }
};

export const login = (user: string) => async (dispatch: any) => {
  await dispatch(actions.loginLoading());
  const localUser = localStorage.getItem("userData") || "";
  let parseLocalUser;
  let parseUser;

  if (localUser.length > 0) {
    parseLocalUser = JSON.parse(localUser);
    parseUser = JSON.parse(user);
  } else {
    await dispatch(actions.loginFail("No user found"));
    return;
  }

  try {
    if (parseLocalUser.password === parseUser.password) {
      window.location.href = "/mylibrary";
      await dispatch(actions.loginSuccess(user));
    }
  } catch (error) {
    await dispatch(actions.loginFail(error));
  }
};
