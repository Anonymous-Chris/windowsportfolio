import React from "react"
import { FiGithub } from "react-icons/fi"
const GithubButton = ({ disabled, url }) => {
    return (
        <div
            onClick={() => (!disabled ? window.open(url, "_blank") : "")}
            className={`group mr-1 flex w-[inherit] max-w-[250px] cursor-pointer items-center justify-center rounded border-2 ${
                disabled ? "cursor-not-allowed opacity-50" : ""
            }`}
        >
            <span className="mr-4">Github</span>
            <FiGithub className="absolute ml-[12rem] hidden group-hover:block"></FiGithub>
        </div>
    )
}

export default GithubButton
