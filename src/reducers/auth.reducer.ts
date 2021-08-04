import { Reducer } from "redux"
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";

export interface AuthState {
  id?: number;
}

const intialState = {}

export const authReducer: Reducer<AuthState> =
  (state = intialState, action) => {
    switch (action.type) {
      
      case ME_FETCH:
      case ME_LOGIN:
        const userId: number = action.payload.id
        return { ...state, id: userId };

      default:
        return state;
    }

  }