import { Group } from "../models/Group";
import { GROUP_QUERY_CHANGED, GROUP_QUERY_COMPLETED } from "./action.constants"

export const queryChangedAction = (query: string) => ({
  type: GROUP_QUERY_CHANGED,
  payload: query,
})

export const queryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUP_QUERY_COMPLETED,
  payload: { query, groups }
})

// export const GroupDataById = (id: number) => ({ type: GROUP_DATA_BY_ID, payload: { id } })

// export const groupActions = bindActionCreators({
//   queryChanged: queryChangedAction,
//   queryCompletedAction: queryCompletedAction,
// }, store.dispatch);