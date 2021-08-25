import { Reducer } from "redux";
import { Group } from "../models/Group";
import {
  EntityState,
  initialEntityState,
  setErrorForOne,
  select,
} from "./entity.reducer";
import { GROUP_FETCHED_BY_ID, GROUP_FETCH_BY_ID_ERROR, GROUP_LIST_FETCHED, GROUP_PARAMS_CHANGED, GROUP_SELECTED_CHANGED } from "../actions/action.constants";


export interface GroupState extends EntityState<Group> {

  byId: { [id: number]: Group };
  params: {
    offset: number;
    query: string;
  };
  resultMap: { 
    [offset: number]: { [query: string]: number[] } 
  };
  // loading :boolean;
  // loadingQuery: { [query: string]: boolean };

}

const intialState = {
  ...initialEntityState,
  params: { offset: 0, query: "" },
  resultMap: {},
  creatorIdsById: {},
  membersIdsById: {},
  // loading : false ,
  // loadingQuery: {},
}

export const groupReducer: Reducer<GroupState> = (state = intialState, action) => {

  switch (action.type) {

    case GROUP_PARAMS_CHANGED:
      return {
        ...state,
        params: { offset: action.payload.offset, query: action.payload.query },
        loadingList: true,
      };


      case GROUP_LIST_FETCHED: {
        const groups = action.payload.groups;
        // console.log("Groups Reducer groups " ,groups);
        
        let groupIds : string[] = []
        if(groups !== undefined)
          groupIds = Object.keys(groups);

        // console.log("Groups Reducer groupids", groupIds);
        

        return {
          ...state,
          byId: { ...state.byId, ...groups },
          resultMap: {
            ...state.resultMap,
            
            [action.payload.offset === undefined ? 0 : action.payload.offset]: 
            {
              ...state.resultMap[action.payload.offset],

              [action.payload.query === undefined
                ? " "
                : action.payload.query]: groupIds,
            },
          },
          loadingList: false,
        };
      }

    case GROUP_SELECTED_CHANGED:
        return select(state, action.payload) as GroupState;
      
    case GROUP_FETCHED_BY_ID: {
      return {
        ...state,
        byId: { ...state.byId, ...action.payload },
        loadingById: false,
      };
    }

    case GROUP_FETCH_BY_ID_ERROR: {
      return setErrorForOne(
        state,
        action.payload.id,
        action.payload.error
      ) as GroupState;
    }

    default:
      return state;
  }
}