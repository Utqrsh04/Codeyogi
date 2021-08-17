
// AUTH ACTIONS
export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";

// UI ACTIONS
export const UI_TOGGLE_SIDEBAR = "ui/toggleSidebar";


// GROUP ACTIONS
export const GROUPS_QUERY_CHANGED = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/query_completed";
// loadingOne = true  , selectedId = payload ,  trigger API groups/:id  , error = undefined 
// This action is Dispatched from component
export const GROUP_FETCH_ONE = "groups/fetch_one";
// loadinOne = false if payload.group.id === selectedId , addOne to byId 
// This action is Dispatched from Saga
export const GROUP_FETCH_ONE_COMPLETED = "groups/fetch_one_completed";
//( loadingOne = false , error = payload ) if payload.id === selectedId 
// This action is Dispatched from Saga
export const GROUP_FETCH_ONE_ERROR = "groups/fetch_one_error";


// USER ACTIONS 
export const USERS_FETCH = "user/offset_changed";
export const USERS_FETCHED = "user/fetched";
export const USER_FETCHED_BYID = "user/fetched_byId";
export const USER_SELECTED_CHANGED = "user/selected_changed";
