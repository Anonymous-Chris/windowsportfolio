import React from "react"
import Acknowledgment from "../../assets/icons/acknowledgment.png"
import Comments from "../../assets/icons/comments.png"
import Menu from "../../assets/icons/menu.png"
import Project from "../../assets/icons/project.png"
import RecycleBin from "../../assets/icons/recycle-bin.png"
import Settings from "../../assets/icons/settings.png"
import UserFolder from "../../assets/icons/user-folder.png"
import Word from "../../assets/icons/word.png"
import DesktopIcons from "./DesktopIcons"
const DesktopIconsPanel = () => {
    const clickedIcon = (clicked) => {
        console.log(clicked)
    }
    return (
        <div className="flex h-full w-full flex-col flex-wrap content-start gap-2">
            <DesktopIcons
                source={Menu}
                altText="menu"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={UserFolder}
                altText="kshitij"
                clickedIcon={clickedIcon}
            ></DesktopIcons>{" "}
            <DesktopIcons
                source={Word}
                altText="resume"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={Project}
                altText="project"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={Acknowledgment}
                altText="ack"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={Comments}
                altText="comments"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={Settings}
                altText="settings"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
            <DesktopIcons
                source={RecycleBin}
                altText="trash"
                clickedIcon={clickedIcon}
            ></DesktopIcons>
        </div>
    )
}

export default DesktopIconsPanel
