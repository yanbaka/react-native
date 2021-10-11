import { showAction, hideAction } from "./actions";

export const show = (text) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(showAction({
            isShow: true,
            text: text
        }))
    }
}

export const hide = () => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(hideAction({
            isShow: false,
            text: ""
        }))
    }
}