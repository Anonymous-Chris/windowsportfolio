import React from "react"

const Battery = () => {
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
                <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
                <line x1="23" y1="13" x2="23" y2="11"></line>
            </svg>{" "}
        </div>
    )
}

export default Battery
