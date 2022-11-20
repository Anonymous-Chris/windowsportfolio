import React from "react"
import Chrome from "../assets/icons/chrome.svg"
const MobileComponent = () => {
    return (
        <div className="relative z-0 flex h-full bg-aeroplane bg-cover bg-center">
            <div className="p-5">
                <div className="h-11 w-11 rounded-md bg-white">
                    <img
                        className=" h-full w-full p-1"
                        src={Chrome}
                        alt="chrome"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default MobileComponent
