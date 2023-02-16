import React from "react"
import BackendCard from "./BackendCard"
import FrontendCard from "./FrontendCard"

const Skills = () => {
    return (
        <div className="flex w-full flex-col justify-center text-center">
            <h1 className="text-5xl font-bold text-green-400 ">Skills</h1>
            <p>Languages I use for design & development</p>
            <div className="flex flex-col justify-evenly sm:flex-row">
                <FrontendCard></FrontendCard>
                <BackendCard></BackendCard>
            </div>
        </div>
    )
}

export default Skills
