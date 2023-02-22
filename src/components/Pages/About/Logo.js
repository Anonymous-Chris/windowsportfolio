import React from "react"

const Logo = (props) => {
    return (
        <div className="group flex flex-col">
            <img src={props.logo} alt="logo" className="cardIcon h-[55px] w-[55px] cursor-pointer p-1" />
            {props.hover === "true" && <span className="hidden group-hover:block">{props.name}</span>}{" "}
        </div>
    )
}

export default Logo
