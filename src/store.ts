import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { userReducer } from "./reducers/users.reducer";
import { rootSaga, sagaMiddleware } from "./sagas";
import { createBrowserHistory } from 'history'
import { connectRouter } from "connected-react-router";

export type AppState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export const history = createBrowserHistory();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  groups: groupReducer,
  sidebar: sidebarReducer,
  router : connectRouter(history),
});


export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(watchUserChange);


