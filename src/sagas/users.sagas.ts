import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  USERS_FETCH,
  USER_SELECTED_CHANGED,
} from "../actions/action.constants";
import {
  userFetchedById,
  usersFetched,
} from "../actions/user.actions";
import { fetchUserByIdApi, fetchUsersApi } from "../api/users";
import { User } from "../models/User";



function* fetchUsers(action: AnyAction): Generator<any, any, User[]> {
  const users = yield call(fetchUsersApi, {
    offset: action.payload,
    limit: 15,
  });
  // console.log("UserSaga fetchUsers ", users);
  yield put(usersFetched(users, action.payload));
}


function* fetchById(action: AnyAction): Generator<any, any, User> {

  try {
    const user = yield call(fetchUserByIdApi, action.payload);
    // console.log("UserSaga fetchByID ", user);

    yield put(userFetchedById(user));
  } catch (e) {
    const error = e.response.data?.message || "Some Error Occured";
    console.error(error);
    
  }
}



export function* watchUserChange() {
  yield all([
    takeLatest(USERS_FETCH, fetchUsers),
    takeLatest(USER_SELECTED_CHANGED, fetchById),

  ]);
}
