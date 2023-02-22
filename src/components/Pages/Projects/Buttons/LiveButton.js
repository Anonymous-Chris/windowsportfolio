import React from "react"
import { FiCast } from "react-icons/fi"
const LiveButton = () => {
    return (
        <div className="group mr-1 flex w-[inherit] max-w-[250px] cursor-pointer items-center justify-center border-2">
            <span className="mr-4">Live</span>
            <FiCast className=" absolute ml-[12rem] hidden group-hover:block"></FiCast>
        </div>
    )
}

export default LiveButton
