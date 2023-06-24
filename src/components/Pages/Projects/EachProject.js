import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { BsFillMouseFill } from "react-icons/bs"
import GoHome from "../../../components/Pages/Common/GoHome"
import ProjectDescription from "./ProjectDescription"
import ProjectImages from "./ProjectImages"
const EachProject = ({ lastItem, laptopImage, mobileImage, name, config, stackTextDesc, projectDesc, projectInfo }) => {
    return (
        <div className="projectElement projectSnapStop h-full w-full pr-1 text-center">
            <div className="flex h-[85%] w-full flex-col overflow-auto overflow-hidden p-1 lg:flex-row">
                <ProjectImages
                    laptopImage={laptopImage}
                    mobileImage={mobileImage}
                    stackTextDesc={stackTextDesc}
                ></ProjectImages>
                <ProjectDescription
                    name={name}
                    stackTextDesc={stackTextDesc}
                    projectInfo={projectInfo}
                    projectDesc={projectDesc}
                    config={config}
                ></ProjectDescription>
            </div>
            <div className="m-auto mt-5 flex items-center justify-center">
                <BsFillMouseFill className="mr-1 h-[30px] w-[30px]"></BsFillMouseFill>
                {!lastItem && <span>Scroll down</span>}
                {lastItem && <span>Scroll up</span>}
                {!lastItem && <AiOutlineArrowDown className="ml-1 h-[18px] w-[18px]"></AiOutlineArrowDown>}
                {lastItem && <AiOutlineArrowUp className="ml-1 h-[18px] w-[18px]"></AiOutlineArrowUp>}
            </div>
            <GoHome></GoHome>
        </div>
    )
}

export default EachProject
