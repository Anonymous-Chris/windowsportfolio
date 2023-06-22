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
        <div className="flex">
            <div className="flex h-full w-full flex-row justify-between border-1 rounded bg-gray-300 p-2 m-2">
                <span className="font-bold text-lg">Dark Theme</span>
                <span className="cursor-pointer">
                    {darkTheme && <BsToggleOn className="text-[25px]" onClick={changeTheme}></BsToggleOn>}
                    {!darkTheme && (
                    <BsToggleOff className="text-[25px]" onClick={changeTheme}></BsToggleOff>
                    )}
                </span>
            </div>
        </div>
    )
}

export default SettingsDetail
