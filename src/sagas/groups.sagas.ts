import { takeEvery, call, put } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { queryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";


export function* fetchGroups(action: AnyAction): Generator<any> {
  console.log("FetchGroups Called");

  const output: any = yield call(
    fetchGroupsApi,
    { query: action.payload, status: "all-groups" });

  yield put(queryCompletedAction(action.payload, output));
};

export function* watchGroupQueryChanged() {
  // console.log("watchGroupQueryChanged Called");
  yield takeEvery(GROUP_QUERY_CHANGED, fetchGroups)
}