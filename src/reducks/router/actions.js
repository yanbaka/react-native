export const STATE_CHANGE = "STATE_CHANGE";
export const stateChangeAction = (routerState) => {
    return {
        type: "STATE_CHANGE",
        payload: {
            currentRouteName: routerState.name
        }
    }
}