export const initialState = {
    darkTheme: localStorage.getItem("darkTheme") ? JSON.parse(localStorage.getItem("darkTheme")) : true,
    // check if all of these are open in taskbar
    windowsIconClicked: false,
    chromeIconClicked: false,
    microsoftedgeClicked: false,
    fileIconClicked: false,
    settingsIconClicked: false,
    upArrowIconClicked: false,
    resumeIconClicked: false,
    resumePdfIconClicked: false,
    menuIconClicked: false,
    brightness: 100
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            // set the theme selection in local storage
            localStorage.setItem("darkTheme", action.darkTheme)
            return {
                ...state,
                darkTheme: action.darkTheme
            }
        case "UPDATE_TASKBAR_ACTION":
            // console.log(action)
            return {
                ...state,
                windowsIconClicked: action.windowsIconClicked,
                chromeIconClicked: action.chromeIconClicked,
                microsoftedgeClicked: action.microsoftedgeClicked,
                fileIconClicked: action.fileIconClicked,
                upArrowIconClicked: action.upArrowIconClicked
            }
        case "UPDATE_DESKTOP_ACTION":
            // console.log(action)
            return {
                ...state,
                settingsIconClicked: action.settingsIconClicked,
                resumeIconClicked: action.resumeIconClicked,
                resumePdfIconClicked: action.resumePdfIconClicked,
                menuIconClicked: action.menuIconClicked
            }
        case "UPDATE_BRIGHTNESS":
            return {
                ...state,
                brightness: action.brightness
            }
        default:
            return state
    }
}

export default reducer
