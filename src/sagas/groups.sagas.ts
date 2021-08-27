import { takeLatest, delay, call, put, all } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { normalize } from "normalizr";
import { AnyAction } from "redux";
import { GROUP_PARAMS_CHANGED, GROUP_SELECTED_CHANGED } from "../actions/action.constants";
import { groupFetchByIdError, groupFetchedById, groupListFetched } from "../actions/groups.actions";
import { fetchGroupsApi, fetchOneGroupApi, GroupsResponse } from "../api/groups";
import { Group } from "../models/Group";
import { groupSchema } from "../models/schemas";


export function* fetchGroups(action: AnyAction): Generator<any, any, AxiosResponse<GroupsResponse>> {

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
    groupListFetched(
      groupData.entities.groups as any,
      action.payload.query,
      action.payload.offset
    )
  );


}





function* fetchOne(action: AnyAction): Generator<any, any, Group> {
  // console.log("fetchOne Called ");
  // console.log("Inside fetchOne yield call ", yield call(fetchOneGroupApi, action.payload));

  try {
    const group = yield call(fetchOneGroupApi, action.payload);
    const groupData = normalize(group, groupSchema);

    yield put(groupFetchedById(groupData.entities.groups as any));

  } catch (e) {
    const error = e.response.data?.message || "Some Unknown Error";
    yield put(groupFetchByIdError(action.payload, error));
  }
}


export function* watchGroupChanges() {
  yield all([
    takeLatest(GROUP_PARAMS_CHANGED, fetchGroups),
    takeLatest(GROUP_SELECTED_CHANGED, fetchOne ),
  ]);
}
