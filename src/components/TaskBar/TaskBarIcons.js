import React from "react"

const TaskBarIcons = (props) => {
    const clickedIcon = () => {
        console.log(props.altText, "clicked")
        props.clickedIcon(props.altText)
    }
    return (
        <div className="flex h-full cursor-pointer items-center justify-center align-middle hover:bg-taskbar-hover">
            <img
                className="h-8 w-8"
                src={props.source}
                alt={props.altText}
                onClick={clickedIcon}
            />
        </div>
    )
}

export default TaskBarIcons
