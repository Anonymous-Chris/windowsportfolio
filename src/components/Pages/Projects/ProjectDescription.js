import React from "react"
import GithubButton from "./Buttons/GithubButton"
import LiveButton from "./Buttons/LiveButton"
import HorizontalIconsStack from "./HorizontalIconsStack"

const ProjectDescription = ({ stackTextDesc }) => {
    return (
        <div className="flex w-full flex-col lg:w-[40%]">
            <div className="">
                description
                <HorizontalIconsStack stackTextDesc={stackTextDesc}></HorizontalIconsStack>
            </div>
            <div className="flex w-full justify-center">
                <LiveButton></LiveButton>
                <GithubButton></GithubButton>
            </div>
        </div>
    )
}

export default ProjectDescription
