import React from "react"

const Logo = (props) => {
    return (
        <div className="group flex min-h-[80px] flex-col">
            <img src={props.logo} alt="logo" className="cardIcon h-[55px] w-[55px] cursor-pointer p-1" />
            {props.hover === "true" && (
                <p className="textEllipsis hidden max-w-[56px] group-hover:block">{props.name}</p>
            )}{" "}
        </div>
    )
}

export default Logo
