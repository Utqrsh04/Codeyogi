import { Group } from "../models/Group";
import { GROUP_FETCH_ONE, GROUP_FETCH_ONE_COMPLETED, GROUP_FETCH_ONE_ERROR, GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED } from "./action.constants"

export const queryChangedAction = (query: string) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
})

export const queryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups }
})

export const fetchOneGroup = (id: number) => ({ type: GROUP_FETCH_ONE, payload: id })

export const fetchOneGroupCompleted = (group: Group) => ({ type: GROUP_FETCH_ONE_COMPLETED, payload: group })

export const fetchOneGroupError = (id: number, msg: string) => ({ type: GROUP_FETCH_ONE_ERROR, payload: { id, msg }, })


// export const groupActions = bindActionCreators({
//   queryChanged: queryChangedAction,
//   queryCompletedAction: queryCompletedAction,
// }, store.dispatch);