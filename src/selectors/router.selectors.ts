import { createSelector } from "reselect";
import { routerStateSelector } from "./app.selectors";

export const pathnameSelector = createSelector(
  [routerStateSelector],
  (state) => state.location.pathname
);
