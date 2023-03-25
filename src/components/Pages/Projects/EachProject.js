import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { BsFillMouseFill } from "react-icons/bs"
import GoHome from "../../../components/Pages/Common/GoHome"
import ProjectDescription from "./ProjectDescription"
import ProjectImages from "./ProjectImages"
const EachProject = ({ lastItem, laptopImage, mobileImage, stackTextDesc, projectDescriptionDetail }) => {
    return (
        <div className="projectElement projectSnapStop h-full w-full text-center">
            <div className="flex h-[85%] w-full flex-col lg:flex-row">
                <ProjectImages
                    laptopImage={laptopImage}
                    mobileImage={mobileImage}
                    stackTextDesc={stackTextDesc}
                ></ProjectImages>
                <ProjectDescription
                    stackTextDesc={stackTextDesc}
                    projectDescriptionDetail={projectDescriptionDetail}
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
