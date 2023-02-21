import React from "react"
import { FiGithub } from "react-icons/fi"
const GithubButton = () => {
    return (
        <div className="group flex max-w-[250px] items-center justify-center border-2">
            <span className="mr-4">Github</span>
            <FiGithub className="group-hover:block absolute ml-[12rem] hidden"></FiGithub>
        </div>
    )
}

export default GithubButton
