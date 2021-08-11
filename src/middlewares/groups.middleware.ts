import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupApi } from "../api";
import { groupQueryMapSelector } from "../selectors/group.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {

  const queryMap = groupQueryMapSelector(store.getState());
  const query = request.query;

  const groupIds = queryMap[query];

  groupActions.query(query, !groupIds)

  if (groupIds) {
    return;
  }

  fetchGroupApi(request).then(groups => {
    groups && groupActions.queryCompleted(query, groups)
  });
};