import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../actions/action.constants";
import { Group } from "../models/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

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
    case GROUP_QUERY:

      const { query, loading } = action.payload;

      return {
        ...state,
        query: query,
        laodingQuery: {
          ...state.loadingQuery,
          [query]: loading
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


    // case GROUP_DATA_BY_ID:  
    //   return {
    //     ...state ,

    //   }

    default:
      return state;
  }
}