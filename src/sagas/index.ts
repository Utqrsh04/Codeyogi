import createSagaMiddleware from "redux-saga";
import { spawn } from '@redux-saga/core/effects'
import { watchGroupChanges } from "./groups.sagas";
import { watchUserChange } from "./users.sagas";
import { watchAuthChanges } from "./auth.sagas";

export const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer,);

export function* rootSaga() {
  yield spawn(watchAuthChanges);
  yield spawn(watchUserChange);
  yield spawn(watchGroupChanges);

}