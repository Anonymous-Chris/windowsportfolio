import React from "react"
import { FiGithub } from "react-icons/fi"
const GithubButton = () => {
    return (
        <div className="group mr-1 flex w-[inherit] max-w-[250px] items-center justify-center border-2 cursor-pointer">
            <span className="mr-4">Github</span>
            <FiGithub className="absolute ml-[12rem] hidden group-hover:block"></FiGithub>
        </div>
    )
}

export default GithubButton
