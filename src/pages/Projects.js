import React from "react"
import EachProject from "../components/Pages/Projects/EachProject"

const Projects = () => {
    return (
        <div className="projectMandatory relative h-screen w-screen overflow-scroll overflow-x-hidden">
            {/* send lastitem props to the last component */}
            <EachProject component="a"></EachProject>
            <EachProject component="b"></EachProject>
            <EachProject component="c" lastItem={true}></EachProject>
        </div>
    )
}

export default Projects
