import * as Actions from './actions'
import initialState from '../store/initialState'

export const ErrorModalReducer = (state = initialState.errorModal, action) => {
    switch (action.type) {
        case Actions.SHOW:
            return {
                ...state,
                ...action.payload
            }
        case Actions.HIDE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}