import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupApi } from "../api";
import { groupLoadingQuerySelector, groupQueryMapSelector } from "../selectors/group.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {

  const queryLoading = groupLoadingQuerySelector(store.getState());
  const query = request.query;

  const loading = queryLoading[query];

  groupActions.query(query)

  if (loading) {
    return;
  }

  fetchGroupApi(request).then(groups => {
    groups && groupActions.queryCompleted(query, groups)
  });
};