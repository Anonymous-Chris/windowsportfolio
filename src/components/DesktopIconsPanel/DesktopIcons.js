import React from "react"

const DesktopIcons = (props) => {
    const clickedIcon = () => {
        // console.log(props.altText, "clicked")
        props.clickedIcon(props.altText)
    }
    return (
        <div className="flex h-20 w-20 cursor-pointer select-none  flex-col items-center justify-center rounded-md p-2 align-middle hover:bg-desktop-icons-hover">
            <img
                className="h-11 w-11"
                src={props.source}
                alt={props.altText}
                onClick={clickedIcon}
            />
            <span>
                {props.altText.charAt(0).toUpperCase() + props.altText.slice(1)}
            </span>
        </div>
    )
}

export default DesktopIcons
