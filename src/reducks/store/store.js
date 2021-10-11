import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import { UsersReducer } from "../users/reducers";

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            users: UsersReducer
        }),
        applyMiddleware(
            thunk
        )
    )
}