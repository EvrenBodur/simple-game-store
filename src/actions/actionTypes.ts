//Language
export const SET_LANGUAGE = "SET_LANGUAGE";

export interface LangState {
  language: string;
}

interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export type LangAction = SetLanguageAction;

//Auth

export const CREATE_USER = "CREATE_USER";
export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";

export interface UserState {
  user: string;
  error: string;
}

export interface LoginState {
  user: string;
  error: string;
}

interface LoginUserAction {
  type: string;
  payload: string;
}

interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: string;
}

export type RegisterAction = CreateUserAction;
export type LoginAction = LoginUserAction;
