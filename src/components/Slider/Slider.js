import React, { useState } from "react"
import ReactSlider from "react-slider"
const Slider = (props) => {
    const [currentValue, setCurrentValue] = useState(99)
    const updateValue = (value) => {
        setCurrentValue(value)
        if (value > 8 && value < 98) {
            props.getBrightNess(`rgba(0,0,0,${1 - value * 0.01})`)
        }
    }
    return (
        <>
            <p> {currentValue}</p>
            <ReactSlider
                className="customSlider"
                trackClassName="customSlider-track"
                thumbClassName="customSlider-thumb"
                min={0}
                max={100}
                defaultValue={100}
                value={currentValue}
                onChange={(value) => updateValue(value)}
            />
        </>
    )
}

export default Slider
