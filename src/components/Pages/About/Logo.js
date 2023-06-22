import React from "react"

const Logo = (props) => {
    return (
        <div className="group flex min-h-[80px] flex-col">
            <img
                draggable="false"
                src={props.logo}
                alt="logo"
                className="cardIcon h-[56px] w-[56px] cursor-pointer p-1"
            />
            {props.hover === "true" && (
                <p className="textEllipsis hidden max-w-[56px] group-hover:block">{props.name}</p>
            )}{" "}
        </div>
    )
}

export default Logo
