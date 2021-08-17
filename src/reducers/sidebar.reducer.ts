import { Reducer } from "redux";
import { UI_TOGGLE_SIDEBAR } from "../actions/action.constants";

export interface toggleSidebar {
  isOpen: boolean
}

const intialState = {
  isOpen: false,
}

export const sidebarReducer: Reducer<toggleSidebar> = (state = intialState, action) => {
  switch (action.type) {
    case UI_TOGGLE_SIDEBAR:
      return { ...state, isOpen: action.payload }

    default:
      return state;
  }
}