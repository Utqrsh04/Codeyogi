import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";
import { User } from "../models/User";
import {  EntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> { }

const initialState = {
  byId: {}
}

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
        
        default:
          return state
        }
      };
      // return addOne(state, action.payload) as UserState;