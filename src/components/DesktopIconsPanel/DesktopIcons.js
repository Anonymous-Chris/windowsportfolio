import React from "react"

const DesktopIcons = ({ altText, clickedIcon, source, disabled }) => {
    const _clickedIcon = () => {
        // console.log(altText, "clicked")
        clickedIcon(altText)
    }
    return (
        <div
            className={`flex h-20 w-20 select-none  flex-col items-center justify-center rounded-md p-2 align-middle hover:bg-desktop-icons-hover ${
                disabled ? "z-[-1] cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
        >
            <img draggable="false" className="h-11 w-11" src={source} alt={altText} onClick={_clickedIcon} />
            {altText.includes("PDF") ? (
                <span>{altText.charAt(0).toUpperCase() + altText.slice(1, 6)}</span>
            ) : (
                <span>{altText.charAt(0).toUpperCase() + altText.slice(1)}</span>
            )}
        </div>
    )
}

export default DesktopIcons
