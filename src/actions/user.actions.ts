import { User } from "../models/User";
import {
  USER_FETCHED_BYID,
  USERS_FETCHED,
  USER_OFFSET_CHANGED,
  USER_SELECTED_CHANGED,
} from "./action.constants";


export const userChangeOffset = (offset: number) => ({
  type: USER_OFFSET_CHANGED,
  payload: offset,
});

export const userChangeSelected = (id: number) => ({
  type: USER_SELECTED_CHANGED,
  payload: id,
});


export const usersFetched = (users: User[], offset?: number) => ({
  type: USERS_FETCHED,
  payload: { users, offset },
});

export const userFetchedById = (user: User) => ({
  type: USER_FETCHED_BYID,
  payload: user,
});
