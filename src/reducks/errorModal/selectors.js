import { createSelector } from "reselect";

const errorModalSelector = (state) => state.errorModal;

export const getIsShow = createSelector(
    [errorModalSelector],
    state => state.isShow
)

export const getText = createSelector(
    [errorModalSelector],
    state => state.text
)
