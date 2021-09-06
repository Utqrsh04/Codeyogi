import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number;
  // loadingOne: boolean;
  loadingById: boolean;
  loadingList: boolean;
  errorOne?: string;
}

export const initialEntityState = {
  byId: {},
  // loadingOne: false,
  loadingById: false,
  loadingList: false,
}

export const getIds = (entities: Entity[]) => {
  return entities.map((entity) => entity.id);
}

export const select = (state: EntityState, id: number) => ({
  ...state, selectedId: id, loadingById: true, errorOne: undefined,
})

export const setErrorForOne = (state: EntityState, id: number, msg: string) => {
  if (state.selectedId !== id) {
    return state;
  }

  return { ...state, errorOne: msg, loadingOne: false }
}

export const addOne = (state: EntityState, entity: Entity, loading?: boolean) => {

  const newLoading = loading === undefined ? state.loadingById : loading;
  return {
    ...state,
    byId: { ...state.byId, [entity.id]: entity },
    loadingById: newLoading,
  }
}


export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0)
    return state;

  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity }
  }, {})

  return {
    ...state,
    byId: { ...state.byId, ...entityMap }
  };
}

export const updateOne = (state: EntityState, entity: Entity) => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [entity.id!]: { ...state.byId[entity.id!], ...entity },
    },
  };
};
