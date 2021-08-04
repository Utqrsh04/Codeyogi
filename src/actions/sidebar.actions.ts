import { bindActionCreators } from "redux";
import { store } from "../store";
import { UI_TOGGLE_SIDEBAR } from "./action.constants";


export const toggleSidebar = (bool: boolean) => ({ type: UI_TOGGLE_SIDEBAR, payload: bool })



export const sidebarActions = bindActionCreators({
  sidebar: toggleSidebar
}, store.dispatch);