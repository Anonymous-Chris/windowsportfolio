import React from "react"

const TaskBarIcons = ({ altText, clickedIcon, source, disabled, url }) => {
    const _clickedIcon = () => {
        clickedIcon(altText)
    }
    return (
        <div
            className={`flex h-full cursor-pointer items-center justify-center align-middle hover:bg-taskbar-hover ${
                disabled ? "pointer-events-none opacity-50" : ""
            }`}
        >
            {!url && <img draggable="false" className="h-8 w-8" src={source} alt={altText} onClick={_clickedIcon} />}
            {/* if it is a link */}
            {url && (
                <a href={`${url}`} target="_blank" rel="noopener noreferrer">
                    <img draggable="false" className="h-8 w-8" src={source} alt={altText} onClick={_clickedIcon} />
                </a>
            )}
        </div>
    )
}

export default TaskBarIcons
