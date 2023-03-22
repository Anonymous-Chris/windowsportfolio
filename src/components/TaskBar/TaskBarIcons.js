import React from "react"

const TaskBarIcons = (props) => {
    const clickedIcon = () => {
        props.clickedIcon(props.altText)
    }
    return (
        <div className="flex h-full cursor-pointer items-center justify-center align-middle hover:bg-taskbar-hover">
            {props.altText !== "githubIcon" && (
                <img
                    draggable="false"
                    className="h-8 w-8"
                    src={props.source}
                    alt={props.altText}
                    onClick={clickedIcon}
                />
            )}
            {/* if it is a link */}
            {props.altText === "githubIcon" && (
                <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">
                    <img
                        draggable="false"
                        className="h-8 w-8"
                        src={props.source}
                        alt={props.altText}
                        onClick={clickedIcon}
                    />
                </a>
            )}
        </div>
    )
}

export default TaskBarIcons
