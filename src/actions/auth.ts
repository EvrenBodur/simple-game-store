import * as actionTypes from "../actions/actionTypes";

export const createUser = (user: string): actionTypes.RegisterAction => {
  localStorage.setItem("userData", user);
  window.location.href = "/login";
  return {
    type: actionTypes.CREATE_USER,
    payload: user,
  };
};

export const login = (user: string): actionTypes.LoginAction => {
  const localUser = localStorage?.getItem("userData");

  if (localUser) {
    const parseLocalUser = JSON.parse(localUser);
    const parseUser = JSON.parse(user);
    if (parseLocalUser.password === parseUser.password) {
      window.location.href = "/mylibrary";
    } else {
      return {
        type: actionTypes.LOGIN_FAILED,
        payload: "Credentials is incorrect",
      };
    }

    return {
      type: actionTypes.LOGIN,
      payload: parseLocalUser,
    };
  } else {
    return {
      type: actionTypes.LOGIN_FAILED,
      payload: "User not found",
    };
  }
};
