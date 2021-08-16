import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { userReducer } from "./reducers/users.reducer";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";
import { watchUserChange} from "./sagas/users.sagas";

export type AppState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  groups: groupReducer,
  sidebar: sidebarReducer,
});


export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchGroupQueryChanged);
sagaMiddleware.run(watchUserChange);


