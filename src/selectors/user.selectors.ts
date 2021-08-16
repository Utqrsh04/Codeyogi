import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

export const userOffsetSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.offset;
  }
);

export const userLoadingListSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.loadingList;
  }
);

export const userLoadingByIdSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.loadingById;
  }
);

export const userResultMaoSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.usersMap;
  }
);

const byIdSelector = createSelector([userStateSelector], (state) => {
  return state.byId;
});

const selectedIdSelector = createSelector([userStateSelector], (state) => {
  return state.selectedId;
});

export const selectedUserErrorSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.errorOne;
  }
);

export const selectedUserSelector = createSelector(
  [byIdSelector, selectedIdSelector],
  (byId, id) => {
    return id !== undefined ? byId[id] : undefined;
  }
);

export const usersListSelector = createSelector(
  [userResultMaoSelector, byIdSelector, userOffsetSelector],
  (usersMap, byId, offset) => {
    if (usersMap[offset] === undefined) {
      return undefined;
    }
    const userIds = usersMap[offset];
    const users = userIds.map((id) => byId[id!]);
    return users;
  }
);
