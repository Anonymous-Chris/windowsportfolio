export const initialState = {
    darkTheme: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            return {
                ...state,
                darkTheme: action.darkTheme,
            }
        default:
            return state
    }
}

export default reducer
