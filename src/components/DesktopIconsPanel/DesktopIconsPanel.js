import React from "react"
import Acknowledgment from "../../assets/icons/acknowledgment.png"
import Comments from "../../assets/icons/comments.png"
import Menu from "../../assets/icons/menu.png"
import PDF from "../../assets/icons/pdf.svg"
import Project from "../../assets/icons/project.png"
import RecycleBin from "../../assets/icons/recycle-bin.png"
import Settings from "../../assets/icons/settings.png"
import UserFolder from "../../assets/icons/user-folder.png"
import Word from "../../assets/icons/word.png"
import { useStateValue } from "../../context-api/StateProvider"
import DesktopIcons from "./DesktopIcons"
const DesktopIconsPanel = () => {
    const [{ menuIconClicked, settingsIconClicked, resumeIconClicked, resumePdfIconClicked }, dispatch] =
        useStateValue()
    const clickedIcon = (clicked) => {
        console.log(clicked)
        if (clicked === "project") {
            window.location.href = "/projects"
        } else if (clicked === "kshitij") {
            window.location.href = "/about"
        } else {
            dispatch({
                type: "UPDATE_DESKTOP_ACTION",
                settingsIconClicked: clicked === "settings" ? true : settingsIconClicked,
                resumeIconClicked: clicked === "resume" ? true : resumeIconClicked,
                resumePdfIconClicked: clicked === "resume (PDF)" ? true : resumePdfIconClicked,
                menuIconClicked: clicked === "menu" ? !menuIconClicked : menuIconClicked
            })
        }
    }
    return (
        <div className="flex h-full w-full flex-col flex-wrap content-start gap-2">
            <DesktopIcons disabled={false} source={Menu} altText="menu" clickedIcon={clickedIcon}></DesktopIcons>
            <DesktopIcons
                disabled={false}
                source={UserFolder}
                altText="kshitij"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons disabled={false} source={Word} altText="resume" clickedIcon={clickedIcon}></DesktopIcons>
            <DesktopIcons disabled={false} source={PDF} altText="resume (PDF)" clickedIcon={clickedIcon}></DesktopIcons>
            <DesktopIcons disabled={false} source={Project} altText="project" clickedIcon={clickedIcon}></DesktopIcons>
            <DesktopIcons
                disabled={true}
                source={Acknowledgment}
                altText="ack"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons disabled={true} source={Comments} altText="comments" clickedIcon={clickedIcon}></DesktopIcons>
            <DesktopIcons
                disabled={false}
                source={Settings}
                altText="settings"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons disabled={true} source={RecycleBin} altText="trash" clickedIcon={clickedIcon}></DesktopIcons>
        </div>
    )
}

export default DesktopIconsPanel
