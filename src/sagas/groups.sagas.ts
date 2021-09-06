import { takeLatest, delay, call, put, all } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { normalize } from "normalizr";
import { AnyAction } from "redux";
import { GROUP_PARAMS_CHANGED } from "../actions/action.constants";
import {
  groupChangeSelected,
  groupFetchByIdError,
  groupFetched,
  groupFetchedById,
} from "../actions/groups.actions";
import { userListFetched } from "../actions/user.actions";
import { fetchGroupsApi, fetchOneGroupApi, GroupsResponse } from "../api";

import { Group } from "../models/Group";
import { groupSchema } from "../models/schemas";

export function* fetchGroups(
  action: AnyAction
): Generator<any, any, AxiosResponse<GroupsResponse>> {
  yield delay(400);
  const groupResponse: any = yield call(fetchGroupsApi, {
    query: action.payload.query,
    offset: action.payload.offset,
    status: "all-groups",
    limit: 10,
  });

  const groupData = normalize(groupResponse.data.data, [groupSchema]);

  // console.log("Group Saga " , groupData);

  yield put(
    groupFetched(
      groupData.entities.groups as any,
      action.payload.query,
      action.payload.offset
    )
  );

  yield put(userListFetched(groupData.entities.users!));
}

export function* fetchByIdGroup(params: {
  groupId: string;
}): Generator<any, any, Group | string> {
  // console.log("fetchByidGroup Called ");
  // console.log("Inside fetchByidGroup yield call ", yield call(fetchByidGroupGroupApi, action.payload));

  const groupId = +params.groupId;
  yield put(groupChangeSelected(groupId));

  try {
    const group = (yield call(fetchOneGroupApi, groupId)) as Group;
    const groupData = normalize(group, groupSchema);

    yield put(userListFetched(groupData.entities.users!));
    yield put(groupFetchedById(groupData.entities.groups as any));
  } catch (e: any) {
    // console.log(e);
    let errorMessage: string;
    if (e.response === undefined) {
      errorMessage = e.message;
    } else {
      errorMessage = e.response.data?.message || "Some Unknown Error";
    }
    yield put(groupFetchByIdError(groupId, errorMessage));
  }
}

export function* watchGroupChanges() {
  yield all([
    takeLatest(GROUP_PARAMS_CHANGED, fetchGroups),
    // takeLatest(GROUP_SELECTED_CHANGED, fetchOne),
  ]);
}
