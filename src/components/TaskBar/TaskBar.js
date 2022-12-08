import React from "react"
import ChromeIcon from "../../assets/icons/chrome.svg"
import FileIcon from "../../assets/icons/file_explorer.png"
import GithubIcon from "../../assets/icons/github.svg"
import MicrosoftEdge from "../../assets/icons/microsoft-edge.svg"
import WindowsIcon from "../../assets/icons/windows.png"
import { useStateValue } from "../../context-api/StateProvider"
import Battery from "./Battery"
import DatePickerComponent from "./DatePickerComponent"
import Sound from "./Sound"
import TaskBarIcons from "./TaskBarIcons"
import UpArrow from "./UpArrow"
import Weather from "./Weather"
import Wifi from "./Wifi"
const TaskBar = () => {
    const [
        {
            windowsIconClicked,
            chromeIconClicked,
            microsoftedgeClicked,
            fileIconClicked,
            upArrowIconClicked,
        },
        dispatch,
    ] = useStateValue()

    const clickedIcon = (clicked) => {
        dispatch({
            type: "UPDATE_TASKBAR_ACTION",
            windowsIconClicked:
                clicked === "windowsIcon"
                    ? !windowsIconClicked
                    : windowsIconClicked,
            chromeIconClicked:
                clicked === "chromeIcon"
                    ? !chromeIconClicked
                    : chromeIconClicked,
            microsoftedgeClicked:
                clicked === "microsoftedge"
                    ? !microsoftedgeClicked
                    : microsoftedgeClicked,
            fileIconClicked:
                clicked === "fileIcon" ? !fileIconClicked : fileIconClicked,
            upArrowIconClicked:
                clicked === "upArrowIcon"
                    ? !upArrowIconClicked
                    : upArrowIconClicked,
        })
    }
    return (
        <div className="flex w-full select-none">
            <div className="flex w-[70%] items-center justify-center gap-3 bg-taskbar pl-[30%] text-center align-middle">
                <TaskBarIcons
                    source={WindowsIcon}
                    altText="windowsIcon"
                    clickedIcon={clickedIcon}
                ></TaskBarIcons>
                <TaskBarIcons
                    source={ChromeIcon}
                    altText="chromeIcon"
                    clickedIcon={clickedIcon}
                ></TaskBarIcons>
                <TaskBarIcons
                    source={MicrosoftEdge}
                    altText="microsoftedge"
                    clickedIcon={clickedIcon}
                ></TaskBarIcons>
                <TaskBarIcons
                    source={FileIcon}
                    altText="fileIcon"
                    clickedIcon={clickedIcon}
                ></TaskBarIcons>
                <TaskBarIcons
                    source={GithubIcon}
                    altText="githubIcon"
                    clickedIcon={clickedIcon}
                    url="https://github.com/Anonymous-Chris"
                ></TaskBarIcons>
            </div>
            <div
                className="z-10 flex w-[30%] items-center justify-end gap-2 bg-taskbar
                text-center align-middle text-xl"
            >
                <UpArrow
                    altText="upArrowIcon"
                    clickedIcon={clickedIcon}
                    show={upArrowIconClicked}
                ></UpArrow>
                <Weather></Weather>
                <Wifi></Wifi>
                <Battery></Battery>
                <Sound></Sound>
                <DatePickerComponent></DatePickerComponent>
            </div>
        </div>
    )
}

export default TaskBar
