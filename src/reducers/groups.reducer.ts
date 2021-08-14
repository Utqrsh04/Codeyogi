import { Reducer } from "redux";
import { GROUP_FETCH_ONE, GROUP_FETCH_ONE_COMPLETED, GROUP_QUERY_CHANGED, GROUP_QUERY_COMPLETED } from "../actions/action.constants";
import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds, select } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {

  loadingQuery: { [query: string]: boolean };
  query: string;
  queryMap: { [query: string]: number[] }

}

const intialState = {
  loadingQuery: {},
  byId: {},
  query: "",
  queryMap: {}
}

export const groupReducer: Reducer<GroupState> = (state = intialState, action) => {

  switch (action.type) {

    case GROUP_FETCH_ONE:
      return select( state , action.payload) as GroupState;

    case GROUP_QUERY_CHANGED:

      const query = action.payload;

      return {
        ...state,
        query: query,
        laodingQuery: {
          ...state.loadingQuery,
          [query]: true,
        }
      }

    case GROUP_QUERY_COMPLETED:
      const groups: Group[] = action.payload.groups;

      const groupIDs = getIds(groups);

      const newState = addMany(state, groups) as GroupState;

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIDs
        },
        loadingQuery: { ...newState.loadingQuery, [action.payload.query]: false },
      };


    case GROUP_FETCH_ONE_COMPLETED:  
      return addOne(state , action.payload) as GroupState

    default:
      return state;
  }
}