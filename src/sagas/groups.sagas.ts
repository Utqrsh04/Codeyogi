import {takeLatest,delay,call,put,all ,takeEvery} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUP_FETCH_ONE, GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { fetchOneGroup, fetchOneGroupCompleted, queryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";

export function* fetchGroups(action: AnyAction): Generator<any> {
  // console.log("FetchGroups Called");

  yield delay(300);

  const groupResponse: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(queryCompletedAction(action.payload, groupResponse.data.data));
}

export function* fetchOne(action: AnyAction): Generator<any> {

  const res: any = yield call(fetchOneGroup, action.payload);

  yield put(fetchOneGroupCompleted(res.data.data));
}


export function* watchGroupQueryChanged() {
  // console.log("watchGroupQueryChanged Called");
  yield all([
    takeLatest(GROUP_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
  ]);
}
