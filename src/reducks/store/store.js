import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import { UsersReducer } from "../users/reducers";
import { RouterReducer } from "../router/reducers";
import { ErrorModalReducer } from "../errorModal/reducers";

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            users: UsersReducer,
            router: RouterReducer,
            errorModal: ErrorModalReducer
        }),
        applyMiddleware(
            thunk
        )
    )
}