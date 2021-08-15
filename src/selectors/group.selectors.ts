import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";


export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query);


export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap);


export const queryIdsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector],
  (query, queryMap) => queryMap[query] || []);


export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId);


export const groupsLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList);


const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId);

export const selectedLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne);



export const selectedGroupSelector = createSelector(
  [groupByIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]);

export const selectedErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne);


// export const groupsSelector = (state: AppState) => {
//   const query = groupQuerySelector(state);
//   const queryMap = groupQueryMapSelector(state);
//   const byId = groupByIdSelector(state);

//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);

//   return groups;
// }

// export const groupLoadingQuerySelector = createSelector(
//   [groupStateSelector],
//   (groupState) => groupState.loadingQuery)


export const groupsSelector = createSelector(
  [queryIdsSelector, groupByIdSelector],
  (groupsIds, byId) => {
    // const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);

    return groups;
  });