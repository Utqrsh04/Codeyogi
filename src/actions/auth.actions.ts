import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./action.constants";


export const meFetchedAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u })

// export const meProfileSubmit = (u: User) => ({ type: "profile_submit", payload: u })

export const authActions = bindActionCreators({
  fetch: meFetchedAction,
  login: meLoginAction,
  // profile: meProfileSubmit,
}, store.dispatch);