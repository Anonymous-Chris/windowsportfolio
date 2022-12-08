import moment from "moment"
import React, { useState } from "react"
import { SingleDatePicker } from "react-dates"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
const DatePickerComponent = () => {
    const [focused, setFocus] = useState(false)
    const changeDate = () => {}
    const changeFocus = () => {
        setFocus(!focused)
    }
    return (
        <div className="">
            <SingleDatePicker
                date={moment()} // momentPropTypes.momentObj or null
                onDateChange={changeDate} // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={changeFocus} // PropTypes.func.isRequired
                id="taskbar-datepicker" // PropTypes.string.isRequired,
                openDirection={"up"}
                numberOfMonths={1}
                horizontalMargin={40}
                readOnly={true}
            />{" "}
        </div>
    )
}

export default DatePickerComponent
