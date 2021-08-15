import { Reducer } from "redux";
import { GROUP_FETCH_ONE, GROUP_FETCH_ONE_COMPLETED, GROUP_FETCH_ONE_ERROR, GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED } from "../actions/action.constants";
import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorForOne } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {

  query: string;
  queryMap: { [query: string]: number[] }
  // loading :boolean;
  // loadingQuery: { [query: string]: boolean };

}

const intialState = {
  ...initialEntityState,
  query: "",
  queryMap: {}
  // loading : false ,
  // loadingQuery: {},
}

export const groupReducer: Reducer<GroupState> = (state = intialState, action) => {

  switch (action.type) {

    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState;

    case GROUPS_QUERY_CHANGED:

      const query = action.payload;

      return {
        ...state,
        query: query,
        loadingList: true,
        // laodingQuery: {
        //   ...state.loadingQuery,
        //   [query]: true,
        // },
      }

    case GROUPS_QUERY_COMPLETED:
      const groups: Group[] = action.payload.groups;

      const groupIDs = getIds(groups);

      const newState = addMany(state, groups) as GroupState;

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIDs
        },
        loadingList: false,
        // loadingQuery: { ...newState.loadingQuery, [action.payload.query]: false },
      };


    case GROUP_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload, false) as GroupState

    case GROUP_FETCH_ONE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as GroupState

    default:
      return state;
  }
}