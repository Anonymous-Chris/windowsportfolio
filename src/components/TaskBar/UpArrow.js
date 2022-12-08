import React from "react"

const UpArrow = (props) => {
    const clickedIcon = () => {
        props.clickedIcon(props.altText)
    }
    return (
        <div
            className="flex h-full cursor-pointer items-center hover:bg-taskbar-hover"
            onClick={clickedIcon}
        >
            <svg
                stroke="currentColor "
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </div>
    )
}

export default UpArrow
