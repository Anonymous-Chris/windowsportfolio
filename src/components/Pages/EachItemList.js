import React from "react"

const EachItemList = (props) => {
    return (
        <div className="mt-2">
            <span className="mt-2 text-orange-600">&#x2713;</span> {props.desc}
        </div>
    )
}

export default EachItemList
