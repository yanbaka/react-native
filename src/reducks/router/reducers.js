import * as Actions from './actions'
import initialState from '../store/initialState'

export const RouterReducer = (state = initialState.router, action) => {
    switch (action.type) {
        case Actions.STATE_CHANGE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}