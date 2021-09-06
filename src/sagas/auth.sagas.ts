import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { AUTH_TRY_FETCH, AUTH_TRY_LOGIN } from "../actions/action.constants";
import { meFetched, meLoggedIn } from "../actions/auth.actions";
import { loginAPI } from "../api/auth";
import { getMeApi } from "../api/users";
import { User } from "../models/User";

function* login(action: AnyAction): Generator<any, any, User> {
  try {
    const user = yield call(loginAPI, action.payload);

    yield put(meLoggedIn(user));
  } catch (e) {
    console.error(e);
  }
}

function* fetch(action: AnyAction): Generator<any, any, User> {
  try {
    const user = yield call(getMeApi);
    yield put(meFetched(user));
  } catch (e) {
    console.error(e);
  }
}

export function* watchAuthChanges() {
  yield all([
    takeLatest(AUTH_TRY_FETCH, fetch),
    takeLatest(AUTH_TRY_LOGIN, login),
  ]);
}
