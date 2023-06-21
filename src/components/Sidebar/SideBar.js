import React, { useState } from "react"
import { AiFillSound } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"
import { BsBatteryCharging, BsBatteryHalf, BsBrightnessHighFill, BsMoonFill, BsWifi } from "react-icons/bs"
import { FiBluetooth, FiSettings } from "react-icons/fi"
import { ImAccessibility } from "react-icons/im"
import { MdOutlineAirplanemodeActive, MdOutlineSecurity, MdScreenShare } from "react-icons/md"
import { useStateValue } from "../../context-api/StateProvider"
import Slider from "../Slider/Slider"
const SideBar = (props) => {
    const [{ upArrowIconClicked }, dispatch] = useStateValue()
    const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)")
    const [sliderValue, setSliderValue] = useState(100)
    const getBrightNess = (value) => {
        setSliderValue(value)
        setBgColor(`rgba(0,0,0,${1 - value * 0.01})`)
    }

    const getBrightNessOnly = (value) => {}
    const closeSideBar = () => {
        console.log("clickwed outside")
        dispatch({
            type: "UPDATE_TASKBAR_ACTION",
            upArrowIconClicked: false
        })
    }
    return (
        <div className={`slide-in ${props.show ? "show" : ""} from-right`}>
            <div
                className={`slide-in-content float-right mt-[1vh] flex h-[95%] w-[100%] flex-col`}
                style={{
                    background: `rgba(51,65,85,${sliderValue / 100})`
                }}
            >
                <div className="mb-auto flex h-[100%] items-center justify-center text-center">
                    No new Notifications
                </div>
                <div className="m-auto flex w-[95%] rounded bg-[rgba(30,41,59,0.4)] pt-4 pb-2">
                    <div className="flex w-[100%] flex-col">
                        <div className="ml-auto mr-auto mb-2 flex w-[100%] flex-col">
                            {/* first row */}
                            <div className="ml-[5%] mr-[5%] mb-3 flex h-[32px] w-[100%] flex-row">
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <BsWifi></BsWifi>
                                </div>
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <FiBluetooth></FiBluetooth>
                                </div>
                                <div className="flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <MdOutlineAirplanemodeActive></MdOutlineAirplanemodeActive>
                                </div>
                            </div>
                            {/* second row */}
                            <div className="ml-[5%] mb-3 mr-[5%] flex h-[32px] w-[100%] flex-row">
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <BsBatteryCharging></BsBatteryCharging>
                                </div>
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <BsMoonFill></BsMoonFill>
                                </div>
                                <div className="flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <ImAccessibility></ImAccessibility>
                                </div>
                            </div>
                            {/* third row */}
                            <div className="ml-[5%] mb-3 mr-[5%] flex h-[32px] w-[100%] flex-row">
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <BiCurrentLocation></BiCurrentLocation>
                                </div>
                                <div className="mr-[7%] flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <MdOutlineSecurity></MdOutlineSecurity>
                                </div>
                                <div className="flex w-[25%] items-center justify-center rounded bg-slate-500">
                                    <MdScreenShare></MdScreenShare>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto mr-auto mb-2 flex w-[90%]">
                            <AiFillSound></AiFillSound>
                            <Slider getBrightNess={getBrightNessOnly}></Slider>
                        </div>
                        <div className="ml-auto mr-auto mb-2 flex w-[90%]">
                            <BsBrightnessHighFill></BsBrightnessHighFill>
                            <Slider getBrightNess={getBrightNess}></Slider>
                        </div>
                    </div>
                </div>
                <div className="ml-7 mr-5 mt-2 mb-4 flex justify-between">
                    <BsBatteryHalf></BsBatteryHalf>
                    <FiSettings></FiSettings>
                </div>
            </div>
            {/* overlay of brightness */}
            <div
                className={`overlay-screen ${upArrowIconClicked ? "" : "-z-10"}`}
                style={{ background: bgColor }}
                onClick={closeSideBar}
            ></div>
        </div>
    )
}

export default SideBar
