import { AnyAction } from "redux";
import { takeEvery, call } from "@redux-saga/core/effects";
import { fetchByIdGroup } from "./groups.sagas";
import { matchPath } from "react-router-dom";
import { LOCATION_CHANGE } from "connected-react-router";

const routeToSagaMapping: any = {
  "/groups/:groupId": fetchByIdGroup,
};

function* handleLoactionChange(action: AnyAction) {
  const pathname = action.payload.location.pathname;
  console.log(pathname);

  for (const route in routeToSagaMapping) {
    const match = matchPath(pathname, { path: route });
    if (match) {
      const saga = routeToSagaMapping[route];
      yield call(saga, match.params);
    }
  }
}


export function* watchLocationChange() {
    yield takeEvery(LOCATION_CHANGE, handleLoactionChange);
  }
  