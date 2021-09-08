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

export const userByIdSelector = createSelector(
  [userStateSelector],
  (userState) => {
    // console.log("userByIdSelector userState " ,userState);
    
    return userState.byId;
  }
);

const selectedIdSelector = createSelector([userStateSelector], (userState) => {
  return userState.selectedId;
});

export const selectedUserErrorSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.errorOne;
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

export const selectedUserSelector = createSelector(
  [usersListSelector, selectedIdSelector],
  (users, id) => {
    let idx: any = 0;
    users && users.map((user, index) => {  // eslint-disable-line 
      if (user.id === id) idx = index;
    });
    return users && users[idx];
    // console.log(" byId  ", byId)
    
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
