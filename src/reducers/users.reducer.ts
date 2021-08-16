import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN, USER_FETCHED_BYID, USER_FETCH_BYID_ERROR, USERS_FETCHED } from "../actions/action.constants";
import { User } from "../models/User";
import { addMany, addOne, EntityState, getIds, initialEntityState, setErrorForOne } from "./entity.reducer";

export interface UserState extends EntityState<User> { }

export interface UserState extends EntityState {
  byId: { [id: number]: User };
  offset: number;
  usersMap: { [offset: number]: (number | undefined)[] };
  isUpdating: boolean;
}

const initialState = {
  ...initialEntityState,
  usersMap: {},
  offset: 0,
  isUpdating: false,
};

export const userReducer: Reducer<UserState> =
  (state = initialState, action) => {
    switch (action.type) {

      case ME_FETCH:
      case ME_LOGIN:
        const user: User = action.payload;
        return {
          ...state,
          byId: { ...state.byId, [user.id]: user }
        }

      case USERS_FETCHED: {
        const users = action.payload.users as User[];
        const userIds = getIds(users);

        const newState = addMany(state, users) as UserState;

        return {
          ...newState,
          usersMap: {
            ...state.usersMap,
            [action.payload.offset === undefined
              ? 0
              : action.payload.offset]: userIds,
          },
          loadingList: false,
        };
      }

      case USER_FETCHED_BYID: {
        // return addOne(state, action.payload) as UserState;
        return addOne(state, action.payload, false) as UserState;
      }

      case USER_FETCH_BYID_ERROR: {
        return setErrorForOne(
          state,
          action.payload.id,
          action.payload.error
        ) as UserState;
      }

      default:
        return state
    }
  };