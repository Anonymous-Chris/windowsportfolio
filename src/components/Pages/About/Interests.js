import React from "react"
import EachItemList from "../Common/EachItemList"
const Interests = () => {
    return (
        <React.Fragment>
            <h1 className="text-3xl">Interests</h1>
            <EachItemList desc="Eagerly driven to expand technological expertise by actively seeking out and embracing new technologies, continuously striving to enhance skills and stay at the forefront of industry advancements."></EachItemList>
            <EachItemList desc="Passionate about creating intuitive and user-friendly software applications."></EachItemList>
            <EachItemList desc="Passionate about cycling and fishing, actively seeking outdoor adventures on two wheels and by the water's edge."></EachItemList>
            <EachItemList desc="Enthusiastic traveler with a keen interest in exploring new places."></EachItemList>
        </React.Fragment>
    )
}

export default Interests
