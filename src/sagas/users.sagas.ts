import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  USER_OFFSET_CHANGED,
  USER_SELECTED_CHANGED,
  USER_UPDATING,
} from "../actions/action.constants";
import { userFetchedById, userFetchedByIdError,  userListFetched,  userUpdated } from "../actions/user.actions";
import {
  fetchUserByIdApi,
  fetchUserListApi,
  updateUserApi,
} from "../api/users";
import { User } from "../models/User";

function* fetchUserList(action: AnyAction): Generator<any, any, User[]> {
  const userList = yield call(fetchUserListApi, {
    offset: action.payload,
    limit: 12,
  });
  // console.log("UserSaga fetchUsers ", users);
  yield put(userListFetched(userList, action.payload));
}

function* fetchById(action: AnyAction): Generator<any, any, User> {
  try {
    const user = yield call(fetchUserByIdApi, action.payload);
    // console.log("UserSaga fetchByID ", user);

    yield put(userFetchedById(user));
  } catch (e : any) {
    // console.log(e);
    let errorMessage: string;
    if (e.response === undefined) {
      errorMessage = e.message;
    } else {
      errorMessage = e.response.data?.message || "Some Unknown Error";
    }
    console.error(errorMessage);
    yield put(userFetchedByIdError(action.payload, errorMessage));
  }
}

function* updateUser(action: AnyAction): Generator<any, any, User> {
  try {
    const user = yield call(updateUserApi, action.payload);
    // console.log(user);
    
    yield put(userUpdated(user));
  } catch (e) {
    console.log(e);
  }
}

export function* watchUserChange() {
  yield all([
    takeLatest(USER_UPDATING, updateUser),
    takeLatest(USER_OFFSET_CHANGED, fetchUserList),
    takeLatest(USER_SELECTED_CHANGED, fetchById),
  ]);
}
