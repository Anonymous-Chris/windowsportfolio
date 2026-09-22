import React from "react"

const CardItem = (props) => {
    return (
        <div className="grid grid-cols-[max-content_minmax(0,1fr)] gap-4">
            <span className="whitespace-nowrap text-xl text-green-400">{props.name}</span>
            <span className="min-w-0 truncate text-right" title={props.value}>
                {props.value}
            </span>
        </div>
    )
}

export default CardItem
