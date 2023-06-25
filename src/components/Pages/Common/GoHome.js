import React from "react"
import { NavLink } from "react-router-dom"

const GoHome = () => {
    return (
        <div className="mt-5 text-center">
            <NavLink className="rounded bg-gray-600 p-2" to={"/"}>
                Go to Home
            </NavLink>
        </div>
    )
}

export default GoHome
