import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupParamsSelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.params;
  }
);
export const groupLoadingListSelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.loadingList;
  }
);

export const groupLoadingByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.loadingById;
  }
);

export const groupResultsMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.resultMap;
  }
);

export const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId);

export const selectedLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne);

  export const selectedGroupErrorSelector = createSelector(
    [groupStateSelector],
    (groupState) => {
      return groupState.errorOne;
    }
  );  

export const byIdSelector = createSelector([groupStateSelector], (groupState) => {
    return groupState.byId;
  });
  
  
export const selectedGroupSelector = createSelector(
  [byIdSelector, selectedIdSelector],
  (byId, id) => {
    return id !== undefined ? byId[id] : undefined;
  }
);

const selectedCreatorIdSelector = createSelector(
  [selectedIdSelector, selectedGroupSelector],
  (id, group) => {
    return id !== undefined ? (group?.creator as number) : undefined;
  }
);

const selectedMemberIdsSelector = createSelector(
  [selectedIdSelector, selectedGroupSelector],
  (id, group) => {
    return id !== undefined ? (group?.participants as number[]) : undefined;
  }
);

// export const selectedGroupCreatorSelector = createSelector(
//   [selectedCreatorIdSelector, userByIdSelector],
//   (creatorId, userById) => {
//     return creatorId !== undefined ? userById[creatorId] : undefined;
//   }
// );

// export const selectedGroupMemberListSelector = createSelector(
//   [selectedMemberIdsSelector, userByIdSelector],
//   (memberIds, userById) => {
//     if (memberIds === undefined) {
//       return undefined;
//     }
//     const members = memberIds.map((id: any) => userById[id]);
//     return members;
//   }
// );

export const groupsListSelector = createSelector(
  [groupResultsMapSelector, byIdSelector, groupParamsSelector],
  (resultMap, byId, params) => {
    if (
      resultMap[params.offset] === undefined ||
      resultMap[params.offset][params.query] === undefined
    ) {
      return undefined;
    }
    const groupIds = resultMap[params.offset][params.query];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);

// export const groupsSelector = (groupState: AppState) => {
//   const query = groupQuerySelector(groupState);
//   const queryMap = groupQueryMapSelector(groupState);
//   const byId = groupByIdSelector(groupState);

//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);

//   return groups;
// }

// export const groupLoadingQuerySelector = createSelector(
//   [groupStateSelector],
//   (groupState) => groupState.loadingQuery)
