import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../actions/action.constants";
import { Group } from "../models/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  }

  query: string;
  queryMap: { [query: string]: number[] }
}

const intialState = {
  byId: {},
  query: "",
  queryMap: {}
}

export const groupReducer: Reducer<GroupState> = (state = intialState, action) => {

  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload }
    case GROUP_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIDs = groups.map(g => g.id)

      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group }
      }, {})

      return {
        ...state, queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIDs
        },
        byId: { ...state.byId, ...groupMap }
      };


    default:
      return state;
  }
}