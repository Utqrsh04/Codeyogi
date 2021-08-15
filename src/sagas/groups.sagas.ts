import { takeLatest, delay, call, put, all, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUP_FETCH_ONE, GROUPS_QUERY_CHANGED } from "../actions/action.constants";
import { fetchOneGroupCompleted, fetchOneGroupError, queryCompletedAction } from "../actions/groups.actions";
import { fetchGroupsApi, fetchOneGroupApi } from "../api/groups";


export function* fetchGroups(action: AnyAction): Generator<any> {

  yield delay(300);
  const groupResponse: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(queryCompletedAction(action.payload, groupResponse.data.data));
}



function* fetchOne(action: AnyAction): Generator<any> {
  // console.log("fetchOne Called ");
  // console.log("Inside fetchOne yield call ", yield call(fetchOneGroup, action.payload));

  try {
    const res: any = yield call(fetchOneGroupApi, action.payload);
    // console.log("RES  ", res);
    yield put(fetchOneGroupCompleted(res.data.data))

  } catch (e) {

    console.log("Error FetchOne ", e.response);

    const err = e.response.data?.message || "Some Unknown Error Occured"

    yield put(fetchOneGroupError(action.payload, err))
  }
}

export function* watchGroupQueryChanged() {
  // console.log("watchGroupQueryChanged Called");
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
  ]);
}
