export const initialState = {
    darkTheme: localStorage.getItem("darkTheme")
        ? JSON.parse(localStorage.getItem("darkTheme"))
        : true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            // set the theme selection in local storage
            localStorage.setItem("darkTheme", action.darkTheme)
            return {
                ...state,
                darkTheme: action.darkTheme,
            }
        default:
            return state
    }
}

export default reducer
