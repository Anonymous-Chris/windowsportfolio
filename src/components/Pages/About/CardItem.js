import React from "react"

const CardItem = (props) => {
    return (
        <div className="flex justify-between ">
            <span className="text-xl text-green-400">{props.name}</span>
            <span>{props.value}</span>
        </div>
    )
}

export default CardItem
