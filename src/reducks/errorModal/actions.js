export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const showAction = (errorModalState) => {
    return {
        type: "SHOW",
        payload: {
            isShow: true,
            text: errorModalState.text
        }
    }
}

export const hideAction = () => {
    return {
        type: "SHOW",
        payload: {
            isShow: false,
            text: ""
        }
    }
}