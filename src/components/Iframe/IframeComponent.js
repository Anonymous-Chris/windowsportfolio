import React from "react"

const IframeComponent = (props) => {
    return (
        <iframe
            id={props.id}
            width={`${props.width}%`}
            height={`${props.height}%`}
            title={props.title}
            src={props.src}
        ></iframe>
    )
}

export default IframeComponent
