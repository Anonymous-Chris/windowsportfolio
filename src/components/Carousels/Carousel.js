import React from "react"
// import Chrome from "../../assets/images/chrome.png"
const Carousel = (props) => {
    return (
        <div className="h-full w-full">
            <div className="p-5">
                <div className="h-11 w-11 rounded-md bg-white">
                    {/* <img
                        className=" h-full w-full p-1"
                        src={Chrome}
                        alt="chrome"
                    ></img> */}
                    {props.name}
                </div>
            </div>
            <div className="absolute bottom-0">footer</div>
        </div>
    )
}

export default Carousel
