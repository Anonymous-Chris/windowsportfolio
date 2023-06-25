import React from "react"
import Chrome from "../../assets/icons/chrome.svg"
const Carousel = (props) => {
    return (
        <div className="h-full w-full">
            <div className="p-5">
                <div className="h-16 w-16 rounded-md bg-white">
                    <img draggable="false" className=" h-full w-full p-1" src={Chrome} alt="chrome"></img>
                    {props.name}
                </div>
            </div>
            <div className="absolute bottom-0 w-full text-center">Copyright @ {new Date().getFullYear()}</div>
        </div>
    )
}

export default Carousel
