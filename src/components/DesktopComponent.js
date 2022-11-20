import React from "react"
import TaskBar from "./TaskBar/TaskBar"
const DesktopComponent = () => {
    return (
        <div className="relative z-0 flex h-full bg-windows-dark bg-cover bg-center">
            <div className="absolute bottom-0 left-0 flex w-full">
                <TaskBar></TaskBar>
            </div>
        </div>
    )
}

export default DesktopComponent
