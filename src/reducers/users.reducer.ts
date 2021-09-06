import { Reducer } from "redux";
import {
  USER_FETCHED_BYID,
  AUTH_FETCHED,
  AUTH_LOGGED_IN,
  USER_LIST_FETCHED,
  USER_UPDATED,
  USER_UPDATING,
  USER_FETCH_BYID_ERROR,
  USER_SELECTED_CHANGED,
  USER_OFFSET_CHANGED,
} from "../actions/action.constants";
import { User } from "../models/User";
import {
  addOne,
  EntityState,
  initialEntityState,
  setErrorForOne,
  updateOne,
  select,
} from "./entity.reducer";

export interface UserState extends EntityState {
  byId: { [id: number]: User };
  offset: number;
  usersMap: { [offset: number]: number[]};
  isUpdating: boolean;
}

const initialState = {
  ...initialEntityState,
  usersMap: {},
  offset: 0,
  isUpdating: false,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {


    case AUTH_FETCHED:
    case AUTH_LOGGED_IN: {
      return addOne(state, action.payload) as UserState;
    }

    case USER_LIST_FETCHED: {
      const users = action.payload.users as User[];

      const userIds  = Object.keys(users) as any 

      // const userIds = users.map( user  => user.id )
      // console.log(" userIds " , userIds);
      // const newState = addMany(state, users) as UserState;

      return {
        ...state,
        byId: { ...state.byId, ...users },
        usersMap: {
          ...state.usersMap,
          [action.payload.offset === undefined ? 0 : action.payload.offset]:
            userIds,
        },
        loadingList: false,
      };
    }

    case USER_OFFSET_CHANGED:
      return {
        ...state,
        offset: action.payload,
        loadingById: true,
      };


    case USER_SELECTED_CHANGED:
      return select(state, action.payload) as UserState;

    case USER_FETCHED_BYID: {
      // return addOne(state, action.payload, false) as UserState;
      return {
        ...state,
        byId: { ...state.byId, ...action.payload },
        loadingById: false,
      };
    }

    case USER_FETCH_BYID_ERROR: {
      return setErrorForOne(
        state,
        action.payload.id,
        action.payload.error
      ) as UserState;
    }

    case USER_UPDATED: {
      const newState = updateOne(state, action.payload) as UserState;
      return { ...newState, isUpdating: false };
    }

    case USER_UPDATING: {
      return { ...state, isUpdating: true };
    }

    default:
      return state;
  }
};
