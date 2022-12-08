import React from "react"
import SettingsDetail from "../Settings/SettingsDetail"
import SettingsMenu from "./SettingsMenu"
const SettingsComponent = () => {
    return (
        <div className="flex h-full w-full bg-white text-black">
            <div className="h-full w-[35%]">
                <SettingsMenu></SettingsMenu>
            </div>
            <div className="h-full w-[65%]">
                <SettingsDetail></SettingsDetail>
            </div>
        </div>
    )
}

export default SettingsComponent
