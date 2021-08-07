import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query)


export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap)

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId)

// export const groupsSelector = (state: AppState) => {
//   const query = groupQuerySelector(state);
//   const queryMap = groupQueryMapSelector(state);
//   const byId = groupByIdSelector(state);

//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);

//   return groups;
// }

export const groupsSelector = createSelector([groupQuerySelector, groupQueryMapSelector, groupByIdSelector],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);

    return groups;
  });