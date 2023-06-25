import React from "react"
import FirstCarousel from "./FirstCarousel"
import SecondCarousel from "./SecondCarousel"
const Carousel = (props) => {
    return (
        <div className="h-full w-full">
            {props.name === "first" && <FirstCarousel></FirstCarousel>}
            {props.name === "second" && <SecondCarousel></SecondCarousel>}
            {/* <div className="absolute bottom-0 w-full text-center">Copyright @ {new Date().getFullYear()}</div> */}
        </div>
    )
}

export default Carousel
