import React from "react"
import GithubButton from "./Buttons/GithubButton"
import LiveButton from "./Buttons/LiveButton"
import HorizontalIconsStack from "./HorizontalIconsStack"
import ProjectDescriptionDetail from "./ProjectDescriptionDetail"
const ProjectDescription = ({ stackTextDesc, projectDesc, name, config }) => {
    return (
        <div className="flex w-full flex-col lg:w-[40%]">
            {name.toUpperCase()}
            <div className="">
                <HorizontalIconsStack stackTextDesc={stackTextDesc}></HorizontalIconsStack>
                <ProjectDescriptionDetail projectDesc={projectDesc}></ProjectDescriptionDetail>
            </div>
            <div className="flex w-full justify-center">
                <LiveButton disabled={!config.isLive} url={config.liveUrl}></LiveButton>
                <GithubButton disabled={!config.hasGithub} url={config.githubUrl}></GithubButton>
            </div>
        </div>
    )
}

export default ProjectDescription
