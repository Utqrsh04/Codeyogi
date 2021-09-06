import { Reducer } from "redux";
import { AUTH_FETCHED, AUTH_LOGGED_IN } from "../actions/action.constants";

export interface AuthState {
  id?: number;
}

const intialState = {
  id: undefined,
};

export const authReducer: Reducer<AuthState> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case AUTH_FETCHED:
    case AUTH_LOGGED_IN:
      return { ...state, id: action.payload.id };

    default:
      return state;
  }
};
