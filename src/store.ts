import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export interface AppState {
  me?: User,
  isSidebarOpen: boolean,

  groupQuery: string;
  groupqueryMap: { [Keyword: string]: number[] };

  groups: { [id: number]: Group },
}

const initialState: AppState = {
  me: undefined,
  isSidebarOpen: true,

  groupQuery: "",
  groupqueryMap: {},
  groups: {},
}

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const UI_TOGGLE_SIDEBAR = "ui/toggleSidebar";

const ME_GROUP_QUERY = "groups/query";
const ME_GROUP_QUERY_COMPLETED = "groups/query_completed";

const reducer: Reducer<AppState, AnyAction> = (
  state = initialState, action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload }

    case UI_TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: action.payload }

    case ME_GROUP_QUERY:
      return { ...state, groupQuery: action.payload }

    case ME_GROUP_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIDs = groups.map(g => g.id)

      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group }
      }, {})

      return {
        ...state, groupqueryMap: {
          ...state.groupqueryMap,
          [action.payload.searchQuery]: groupIDs
        },
        groups: { ...state.groups, ...groupMap }
      };


    default:
      return state
  }

}

export const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const meFetchedAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u })
export const uiToggleSidebar = (bool: boolean) => ({ type: UI_TOGGLE_SIDEBAR, payload: bool })
export const meGroupQuery = (groupQuery: string) => ({ type: ME_GROUP_QUERY, payload: groupQuery })

