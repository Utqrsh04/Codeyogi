import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export interface AppState {
  me?: User,
  groups: Group[],
  isSidebarOpen: boolean,
}

const initialState: AppState = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
}

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const GROUP_FETCH = "fetchGroups";
const TOGGLE_SIDEBAR = "toggleSidebar";

const reducer: Reducer<AppState, AnyAction> = (currentState = initialState, dispatchedAction: AnyAction) => {

  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload }

    case GROUP_FETCH:
      return { ...currentState, groups: dispatchedAction.payload }
    case TOGGLE_SIDEBAR:
      return { ...currentState, isSidebarOpen: dispatchedAction.payload }
    default:
      return currentState
  }

}

export const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const meFetchedAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u })
export const meFetchGroups = (data: Group[]) => ({ type: GROUP_FETCH, payload: data })
export const meToggleSidebar = (bool: boolean) => ({ type: TOGGLE_SIDEBAR, payload: bool })
