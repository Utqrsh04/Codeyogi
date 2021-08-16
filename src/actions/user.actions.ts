import { User } from "../models/User";
import {
  USER_FETCHED_BYID,
  USERS_FETCHED,
  USER_OFFSET_CHANGED,
  USER_SELECTED_CHANGED,
  USER_UPDATED,
  USER_UPDATING,
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

export const userUpdated = (user: User) => ({
  type: USER_UPDATED,
  payload: user,
});

export const userUpdating = (data: User) => ({
  type: USER_UPDATING,
  payload: data,
});

