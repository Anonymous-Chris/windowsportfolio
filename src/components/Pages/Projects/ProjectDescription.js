import React from "react"
import GithubButton from "./Buttons/GithubButton"
import LiveButton from "./Buttons/LiveButton"
import HorizontalIconsStack from "./HorizontalIconsStack"
import ProjectDescriptionDetail from "./ProjectDescriptionDetail"
const ProjectDescription = ({ stackTextDesc, projectInfo, projectDesc, name, config }) => {
    return (
        <div className="flex w-full flex-col lg:w-[40%]">
            <span className="mb-3 text-6xl font-bold text-cyan-400">{name}</span>
            <div className="">
                <HorizontalIconsStack stackTextDesc={stackTextDesc}></HorizontalIconsStack>
                <ProjectDescriptionDetail
                    projectInfo={projectInfo}
                    projectDesc={projectDesc}
                ></ProjectDescriptionDetail>
            </div>
            <div className="flex w-full justify-center text-2xl relative">
                <LiveButton disabled={!config.isLive} url={config.liveUrl}></LiveButton>
                <GithubButton disabled={!config.hasGithub} url={config.githubUrl}></GithubButton>
            </div>
        </div>
    )
}

export default ProjectDescription
