import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <NavLink className="mr-2" exact="true" to="/">
                Home
            </NavLink>
            <NavLink className="mr-2" exact="true" to="/about">
                About
            </NavLink>
            <NavLink className="mr-2" exact="true" to="/projects">
                Projects
            </NavLink>
            <NavLink className="mr-2" exact="true" to="/error">
                Error
            </NavLink>
        </div>
    )
}

export default Navbar
