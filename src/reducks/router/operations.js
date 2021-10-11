import { stateChangeAction } from "./actions";

export const stateChange = (event) => {
    return (dispatch, getState) => {
        const state = getState()

        const getCurrentRoute = (state) => {
            if (state.index === undefined || state.index < 0) {
              return undefined;
            }
            const nestedState = state.routes[state.index].state;
            if (nestedState !== undefined) {
              return getCurrentRoute(nestedState);
            }
            return state.routes[state.index].name;
        };
        
        const currentRouteName = getCurrentRoute(event)
        console.log(currentRouteName)
        dispatch(stateChangeAction({
            currentRouteName: currentRouteName
        }))
    }
}