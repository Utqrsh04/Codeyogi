import { User } from "../models/User";
import {
  USER_FETCHED_BYID,
  USERS_FETCHED,
  USERS_FETCH,
  USER_SELECTED_CHANGED,
} from "./action.constants";


export const userFetch = (offset: number) => ({
  type: USERS_FETCH,
  payload: offset,
});


export const usersFetched = (users: User[], offset?: number) => ({
  type: USERS_FETCHED,
  payload: { users, offset },
});


export const userSelectedChanged = (id: number) => ({
  type: USER_SELECTED_CHANGED,
  payload: id,
});

export const userFetchedById = (user: User) => ({
  type: USER_FETCHED_BYID,
  payload: user,
});
