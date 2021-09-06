import createSagaMiddleware from "redux-saga";
import { fork } from '@redux-saga/core/effects'
import { watchGroupChanges } from "./groups.sagas";
import { watchUserChange } from "./users.sagas";
import { watchAuthChanges } from "./auth.sagas";
import { watchLocationChange } from "./router.sagas";

export const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer,);

export function* rootSaga() {
  yield fork(watchAuthChanges);
  yield fork(watchUserChange);
  yield fork(watchGroupChanges);
  yield fork(watchLocationChange);

}