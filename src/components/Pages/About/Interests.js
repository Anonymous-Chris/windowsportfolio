import React from "react"
import EachItemList from "../Common/EachItemList"
const Interests = () => {
    return (
        <React.Fragment>
            <h1 className="text-2xl">Interests</h1>
            <EachItemList desc="1"></EachItemList>
            <EachItemList desc="2"></EachItemList>
            <EachItemList desc="3"></EachItemList>
            <EachItemList desc="4"></EachItemList>
        </React.Fragment>
    )
}

export default Interests
