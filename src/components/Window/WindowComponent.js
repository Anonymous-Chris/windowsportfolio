import React, { useEffect, useState } from "react"
import { RiCloseCircleLine } from "react-icons/ri"
import { VscChromeMaximize } from "react-icons/vsc"
import { Rnd } from "react-rnd"
import IframeComponent from "../Iframe/IframeComponent"
import ResumeComponent from "../ResumeComponent/ResumeComponent"
import SettingsComponent from "../Settings/SettingsComponent"

const WindowComponent = (props) => {
    const [xPosition, setXPosition] = useState(0)
    const [yPosition, setYPosition] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        // console.log(window.innerHeight)
        setWidth(window.innerWidth / 2)
        setHeight(window.innerHeight / 2)
        // set x and y position in middle
        setXPosition(window.innerWidth - window.innerWidth / 4 - window.innerWidth / 2)
        setYPosition(window.innerHeight - window.innerHeight / 4 - window.innerHeight / 2)
    }, [])

    const updateWindowSize = () => {
        if (window.innerHeight === height) {
            setHeight(window.innerHeight / 2)
            setYPosition(window.innerHeight - window.innerHeight / 4 - window.innerHeight / 2)
        } else {
            setHeight(window.innerHeight)
            setYPosition(0)
        }

        if (window.innerWidth === width) {
            setWidth(window.innerWidth / 2)
            setXPosition(window.innerWidth - window.innerWidth / 4 - window.innerWidth / 2)
        } else {
            setWidth(window.innerWidth)
            setXPosition(0)
        }
    }

    const closeWindow = () => {
        props.showWindow(false, props.clicked)
    }
    const clickedWindow = () => {
        // console.log(props.clicked)
        props.getActiveTab(props.clicked)
    }
    return (
        <Rnd
            size={{ width: width, height: height }}
            position={{ x: xPosition, y: yPosition }}
            onDragStop={(e, d) => {
                setXPosition(d.x)
                setYPosition(d.y)
            }}
            onResize={(e, direction, ref, delta, position) => {
                setWidth(ref.style.width)
                setHeight(ref.style.height)
                setXPosition(position.x)
                setYPosition(position.y)
            }}
            bounds="window"
            // only draggable with the class name present
            dragHandleClassName="dragClassName"
            className={props.activeTab === props.clicked ? "z-10" : ""}
            onClick={clickedWindow}
        >
            <div className="flex h-full w-full flex-col border-2 border-gray-600">
                <div className="dragClassName ml-auto flex h-6 w-full cursor-pointer bg-gray-600 text-lg ">
                    <div className=" ml-auto cursor-pointer text-white" onClick={updateWindowSize}>
                        <VscChromeMaximize></VscChromeMaximize>
                    </div>
                    <div className="cursor-pointer text-white hover:text-red-600" onClick={closeWindow}>
                        <RiCloseCircleLine></RiCloseCircleLine>
                    </div>
                </div>
                <div className="h-full w-full overflow-hidden">
                    {props.clicked === "chromeIcon" && (
                        <IframeComponent
                            id="google"
                            width="100"
                            height="100"
                            title="google"
                            src="https://www.google.com/search?igu=1"
                        ></IframeComponent>
                    )}
                    {props.clicked === "microsoftedge" && (
                        <IframeComponent
                            id="bing"
                            width="100"
                            height="100"
                            title="bing"
                            src="https://www.bing.com/?scope=images&nr=1&FORM=NOFORM"
                        ></IframeComponent>
                    )}

                    {props.clicked === "settings" && <SettingsComponent></SettingsComponent>}
                    {props.clicked === "resume" && <ResumeComponent resumeType="word"></ResumeComponent>}
                    {props.clicked === "resume (PDF)" && <ResumeComponent resumeType="pdf"></ResumeComponent>}
                </div>
            </div>
        </Rnd>
    )
}

export default WindowComponent
