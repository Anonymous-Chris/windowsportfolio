import React from "react"
import { useStateValue } from "../context-api/StateProvider"
import DesktopIconsPanel from "./DesktopIconsPanel/DesktopIconsPanel"
import TaskBar from "./TaskBar/TaskBar"
const DesktopComponent = () => {
    const [{ darkTheme }, dispatch] = useStateValue()
    const changeTheme = () => {
        dispatch({
            type: "UPDATE_THEME",
            darkTheme: !darkTheme,
        })
    }
    return (
        <div
            className={`relative z-0 flex h-full ${
                darkTheme ? "bg-windows-dark" : "bg-windows-light"
            } bg-cover bg-center text-white`}
        >
            <div className="left-0 m-10 flex w-full">
                <DesktopIconsPanel></DesktopIconsPanel>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full">
                <TaskBar></TaskBar>
            </div>
            <button className=" h-10" onClick={changeTheme}>
                Change theme
            </button>
        </div>
    )
}

export default DesktopComponent
