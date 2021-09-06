import { LoginData } from "../api/auth";
import { User } from "../models/User";
import { AUTH_FETCHED, AUTH_LOGGED_IN, AUTH_TRY_FETCH, AUTH_TRY_LOGIN } from "./action.constants";

export const meLoggedIn = (user: User) => ({
  type: AUTH_LOGGED_IN,
  payload: user,
});

export const meTryLogin = (data: LoginData) => ({
  type: AUTH_TRY_LOGIN,
  payload: data,
});

export const meFetched = (user: User) => ({
  type: AUTH_FETCHED,
  payload: user,
});

export const meTryFetch = () => ({
  type: AUTH_TRY_FETCH,
});
