import React from "react"
import { FiCast } from "react-icons/fi"
const LiveButton = () => {
    return (
        <div className="group flex max-w-[250px] items-center justify-center border-2">
            <span className="mr-4">Live</span>
            <FiCast className=" absolute ml-[12rem] hidden group-hover:block"></FiCast>
        </div>
    )
}

export default LiveButton
