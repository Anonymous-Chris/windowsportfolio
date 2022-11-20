import React from "react"

const Sound = () => {
    return (
        <div className="flex h-full cursor-pointer items-center hover:bg-taskbar-hover">
            <svg
                stroke="currentColor"
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
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>{" "}
        </div>
    )
}

export default Sound
