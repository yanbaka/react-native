import { createSelector } from "reselect";

const routerSelector = (state) => state.router;

export const getCurrentRouteName = createSelector(
    [routerSelector],
    state => state.currentRouteName
)