import React, { useEffect, useRef } from "react"
import Carousel from "./Carousels/Carousel"
const MobileComponent = () => {
    let carousels = [
        <Carousel name={1} />,
        <Carousel name={2} />,
        <Carousel name={3} />,
    ]
    const inputRef = useRef(null)

    useEffect(() => {
        // since the carousel doesnt work in smaller devices.
        // have to start navigation for it to work
        inputRef.current.click()
    }, [])
    return (
        <div className="z-0 h-full w-full bg-aeroplane bg-cover bg-center">
            <div
                id="carouselExampleCaptions"
                className="slide carousel h-full"
                data-bs-ride="carousel"
                data-bs-interval="false"
            >
                <div className="carousel-indicators absolute right-0 bottom-10 left-0 flex justify-center p-0">
                    {carousels.map((item, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={`carouselNavigator ${
                                    index === 0 ? "active" : ""
                                } rounded-full`}
                                aria-current="true"
                                aria-label={`Slide ${index}`}
                                ref={index === 0 ? inputRef : null}
                            ></button>
                        )
                    })}
                </div>
                <div className="carousel-inner relative h-full w-full overflow-hidden">
                    {carousels.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item relative float-left h-full w-full ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <div>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileComponent
