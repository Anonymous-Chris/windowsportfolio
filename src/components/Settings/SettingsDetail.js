import React from "react"
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { useStateValue } from "../../context-api/StateProvider"

const SettingsDetail = () => {
    const [{ darkTheme }, dispatch] = useStateValue()

    const changeTheme = () => {
        dispatch({
            type: "UPDATE_THEME",
            darkTheme: !darkTheme,
        })
    }
    return (
        <div className="flex h-full w-full flex-row justify-between border-2 border-green-500">
            <div> Dark Theme</div>
            <div>
                {darkTheme && <BsToggleOn onClick={changeTheme}></BsToggleOn>}
                {!darkTheme && (
                    <BsToggleOff onClick={changeTheme}></BsToggleOff>
                )}
            </div>
        </div>
    )
}

export default SettingsDetail
