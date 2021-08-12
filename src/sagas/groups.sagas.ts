import {takeLatest,delay,call,put,} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { queryCompletedAction } from "../actions/groups.actions";
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

export function* watchGroupQueryChanged() {
  // console.log("watchGroupQueryChanged Called");
  yield takeLatest(GROUP_QUERY_CHANGED, fetchGroups);
}
