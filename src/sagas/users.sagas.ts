import { takeLatest, delay, call, put, all, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { USERS_QUERY_CHANGED, USER_FETCH_ONE } from "../actions/action.constants";
import { fetchOneUserCompleted, fetchOneUserError } from "../actions/user.actions";
import { fetchOneUserApi } from "../api/users";



// export function* fetchUsers(action: AnyAction): Generator<any> {

//   yield delay(300);
//   const groupResponse: any = yield call(fetchUsersApi, {
//     query: action.payload,
//     status: "all-groups",
//   });

//   yield put(queryCompletedAction(action.payload, groupResponse.data.data));
// }


function* fetchOne(action: AnyAction): Generator<any> {
  console.log("fetchOne Called ");
  // console.log("Inside fetchOne yield call ", yield call(fetchOneGroup, action.payload));

  try {
    const res: any = yield call(fetchOneUserApi, action.payload);
    console.log("RES  ", res);
    yield put(fetchOneUserCompleted(res.data.data))

  } catch (e) {

    console.log("Error FetchOne ", e.response);
    const err = e.response.data?.message || "Some Error Occured"

    yield put(fetchOneUserError(action.payload, err))
  }
}



export function* watchUserQueryChanged() {
  // console.log("watchGroupQueryChanged Called");
  yield all([
    // takeLatest(USERS_QUERY_CHANGED, fetchUsers),
    takeEvery(USER_FETCH_ONE, fetchOne),
  ]);
}
