import { LoginData } from "../api/auth";
import { User } from "../models/User";
import { AUTH_FETCHED, AUTH_LOGGED_IN, AUTH_FETCH_TRY, AUTH_LOGIN_TRY } from "./action.constants";

export const meLoggedIn = (user: User) => ({
  type: AUTH_LOGGED_IN,
  payload: user,
});

export const meTryLogin = (data: LoginData) => ({
  type: AUTH_LOGIN_TRY,
  payload: data,
});

export const meFetched = (user: User) => ({
  type: AUTH_FETCHED,
  payload: user,
});

export const meTryFetch = () => ({
  type: AUTH_FETCH_TRY,
});
