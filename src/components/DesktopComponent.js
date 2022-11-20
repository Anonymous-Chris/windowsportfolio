import React from "react"
import DesktopIconsPanel from "./DesktopIconsPanel/DesktopIconsPanel"
import TaskBar from "./TaskBar/TaskBar"
const DesktopComponent = () => {
    return (
        <div className="relative z-0 flex h-full bg-windows-dark bg-cover bg-center text-white">
            <div className="left-0 m-10 flex w-full">
                <DesktopIconsPanel></DesktopIconsPanel>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full">
                <TaskBar></TaskBar>
            </div>
        </div>
    )
}

export default DesktopComponent
