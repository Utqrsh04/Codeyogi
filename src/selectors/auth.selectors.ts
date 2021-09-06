import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";

export const authIdSelector = createSelector([authStateSelector], (state) => {
  return state.id;
});
