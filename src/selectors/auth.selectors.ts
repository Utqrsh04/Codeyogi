import { AppState } from "../store";

export const meSelector = (state: AppState) => state.auth.id === undefined ? undefined : state.user.byId[state.auth.id]