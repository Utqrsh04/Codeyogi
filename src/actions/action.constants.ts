

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";

export const UI_TOGGLE_SIDEBAR = "ui/toggleSidebar";

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


export const USERS_QUERY_CHANGED = "users/query";
export const USERS_QUERY_COMPLETED = "users/query_completed";

// loadingOne = true  , selectedId = payload ,  trigger API people/:id  , error = undefined 
export const USER_FETCH_ONE = "users/fetch_one";
// loadinOne = false if payload.user.id === selectedId , addOne to byId 
export const USER_FETCH_ONE_COMPLETED = "users/fetch_one_completed";
//( loadingOne = false , error = payload ) if payload.id === selectedId 
export const USER_FETCH_ONE_ERROR = "users/fetch_one_error";





