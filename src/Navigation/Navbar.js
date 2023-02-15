import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link className="mr-2" to="/">
                Home
            </Link>
            <Link className="mr-2" to="/about">
                About
            </Link>
            <Link className="mr-2" to="/projects">
                Projects
            </Link>
            <Link className="mr-2" to="/error">
                Error
            </Link>
        </div>
    )
}

export default Navbar
