import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";
import { authIdSelector } from "./auth.selectors";

export const userOffSetSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.offset;
  }
);

export const userLoadingListSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.loadingList;
  }
);

export const userLoadingByIdSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.loadingById;
  }
);

export const userResultMapSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.usersMap;
  }
);

export const userByIdSelector = createSelector([userStateSelector], (userState) => {
  return userState.byId;
});


const selectedIdSelector = createSelector([userStateSelector], (userState) => {
  return userState.selectedId;
});

export const selectedUserErrorSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.errorOne;
  }
);


export const selectedUserSelector = createSelector(
  [userByIdSelector, selectedIdSelector],
  (byId, id) => {
    // console.log("SELECTED USER SELECTOR ", byId, id)
    return id !== undefined ? byId[id] : undefined;
  }
);

export const usersListSelector = createSelector(
  [userResultMapSelector, userByIdSelector, userOffSetSelector],
  (usersMap, byId, offset) => {
    if (usersMap[offset] === undefined) {
      return undefined;
    }
    const userIds = usersMap[offset];
    // console.log(userIds);
    
    const users = userIds.map((id) => byId[id!]);
    // console.log(users);
    
    return users;
  }
);


const userIdSelector = createSelector([userStateSelector], (userState) => {
  return userState.byId;
});

export const loggedInUserSelector = createSelector(
  [authIdSelector, userIdSelector],
  (authId, userId) => {
    return authId !== undefined ? userId[authId!] : undefined;
  }
);
