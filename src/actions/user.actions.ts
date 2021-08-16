import { User } from "../models/User";
import {
  USER_FETCHED_BYID,
  USER_FETCH_BYID_ERROR,
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

export const userFetchedByIdError = (id: number, error: string) => ({
  _type: USER_FETCH_BYID_ERROR,
  get type() {
    return this._type;
  },
  set type(value) {
    this._type = value;
  },
  payload: { id, error },
});


export const userUpdated = (user: User) => ({
  type: USER_UPDATED,
  payload: user,
});

export const userUpdating = (data: User) => ({
  type: USER_UPDATING,
  payload: data,
});

