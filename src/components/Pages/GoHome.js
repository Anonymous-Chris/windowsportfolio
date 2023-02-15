import React from "react"
import { Link } from "react-router-dom"

const GoHome = () => {
    return (
        <div className="mt-5 text-center">
            <Link to={"/"}>Go to Home</Link>
        </div>
    )
}

export default GoHome
