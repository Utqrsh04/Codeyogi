import { Group } from "../models/Group";
import {
  GROUP_LIST_FETCHED,
  GROUP_FETCHED_BY_ID,
  GROUP_FETCH_BYID_ERROR,
  GROUP_PARAMS_CHANGED,
  GROUP_SELECTED_CHANGED,
} from "./action.constants";

export const groupFetched = (
  groups: { [id: number]: Group },
  query?: string,
  offset?: number
) => ({
  type: GROUP_LIST_FETCHED,
  payload: { groups, query, offset },
});

export const groupFetchedById = (group: { [id: number]: Group }) => ({
  type: GROUP_FETCHED_BY_ID,
  payload: group,
});

export const groupFetchByIdError = (id: number, error: string) => ({
  type: GROUP_FETCH_BYID_ERROR,
  payload: { id, error },
});

export const groupChangeParams = (query: string, offset: number) => ({
  type: GROUP_PARAMS_CHANGED,
  payload: { query, offset },
});

export const groupChangeSelected = (id: number) => ({
  type: GROUP_SELECTED_CHANGED,
  payload: id,
});

// export const groupActions = bindActionCreators({
//   queryChanged: queryChangedAction,
//   queryCompletedAction: queryCompletedAction,
// }, store.dispatch);
