import React from "react"
import EachItemList from "../Common/EachItemList"
const Achievements = () => {
    return (
        <React.Fragment>
            <h1 className="text-2xl">Achievements</h1>
            <EachItemList desc="1"></EachItemList>
            <EachItemList desc="2"></EachItemList>
            <EachItemList desc="3"></EachItemList>
            <EachItemList desc="4"></EachItemList>
        </React.Fragment>
    )
}

export default Achievements
