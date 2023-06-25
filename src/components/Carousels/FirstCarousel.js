import React from "react"
import { NavLink } from "react-router-dom"
import Project from "../../assets/icons/project.png"
import About from "../../assets/icons/user-folder.png"
const FirstCarousel = () => {
    return (
        <div className="flex">
            <NavLink className="mr-2" exact="true" to="/about">
                <div className="p-5">
                    <div className="h-16 w-16 rounded-md">
                        <img draggable="false" className=" h-full w-full p-1" src={About} alt="About"></img>
                        <span className="p-1">Kshitij</span>
                    </div>
                </div>
            </NavLink>
            <NavLink className="mr-2" exact="true" to="/projects">
                <div className="p-5">
                    <div className="h-16 w-16 rounded-md">
                        <img draggable="false" className=" h-full w-full p-1" src={Project} alt="Project"></img>
                        <span className="p-1">Projects</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default FirstCarousel
