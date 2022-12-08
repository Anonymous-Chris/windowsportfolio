import React, { useState } from "react"
import { useStateValue } from "../../context-api/StateProvider"
import Slider from "../Slider/Slider"
const SideBar = (props) => {
    const [{ upArrowIconClicked }, dispatch] = useStateValue()
    const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)")

    const getBrightNess = (value) => {
        setBgColor(value)
    }

    const closeSideBar = () => {
        console.log("clickwed outside")
        dispatch({
            type: "UPDATE_TASKBAR_ACTION",
            upArrowIconClicked: false,
        })
    }
    return (
        <div className={`slide-in ${props.show ? "show" : ""} from-right`}>
            <div
                className={`slide-in-content float-right mt-[1vh] flex h-[95%] w-[100%]`}
                style={{
                    background:
                        bgColor !== "rgba(0, 0, 0, 0)"
                            ? bgColor
                            : "bg-gray-200",
                }}
            >
                <Slider getBrightNess={getBrightNess}></Slider>
            </div>
            {/* overlay of brightness */}
            <div
                className={`overlay-screen ${
                    upArrowIconClicked ? "" : "-z-10"
                }`}
                style={{ background: bgColor }}
                onClick={closeSideBar}
            ></div>
        </div>
    )
}

export default SideBar
