import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { BsFillMouseFill } from "react-icons/bs"
import GoHome from "../../../components/Pages/Common/GoHome"
const EachProject = (props) => {
    return (
        <div className="projectElement projectSnapStop h-full w-full text-center">
            <div>{props.component}</div>
            <div className="m-auto mt-5 flex items-center justify-center">
                <BsFillMouseFill className="mr-1 h-[30px] w-[30px]"></BsFillMouseFill>
                {!props.lastItem && <span>Scroll down</span>}
                {props.lastItem && <span>Scroll up</span>}
                {!props.lastItem && <AiOutlineArrowDown className="ml-1 h-[18px] w-[18px]"></AiOutlineArrowDown>}
                {props.lastItem && <AiOutlineArrowUp className="ml-1 h-[18px] w-[18px]"></AiOutlineArrowUp>}
            </div>
            <GoHome></GoHome>
        </div>
    )
}

export default EachProject
