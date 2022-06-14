// Language
export interface LangState {
  language: string;
}

interface SetLanguageAction {
  type: string;
  payload: string;
}

export type LangAction = SetLanguageAction;

// Auth
export interface UserState {
  user: string;
  error: string;
  loading: boolean;
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
  type: string;
  payload: string;
}

export type RegisterAction = CreateUserAction;
export type LoginAction = LoginUserAction;

// Games Data
export interface GamesData {
  id: number;
  categories: string[];
  name: string;
  summary: string;
  releaseDate: string;
  likes: number;
  cover: string;
  screenshots: string[];
  price: number;
}

export interface GameState {
  data: GamesData[];
  error: object;
  loading: boolean;
}

export interface GamesDataAction {
  type: string;
  payload: GamesData[];
}
