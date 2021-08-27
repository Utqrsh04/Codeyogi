import createSagaMiddleware from "redux-saga";
import { watchGroupChanges } from "./groups.sagas";
import { watchUserChange } from "./users.sagas";
import { spawn } from '@redux-saga/core/effects'

export const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer,);

export function* rootSaga() {
  yield spawn(watchUserChange);
  yield spawn(watchGroupChanges);
}