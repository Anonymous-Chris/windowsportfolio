import React from "react"
import AboutRadarChart from "../graphs/config/AboutRadarChart"
import AboutStatChart from "../graphs/config/AboutStatChart"
const Insights = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl">Insights</h1>
            <div className="mt-2 flex flex-col sm:flex-row">
                <div className="mb-5 w-full">
                    <AboutRadarChart></AboutRadarChart>
                </div>
                <div className="mb-5 w-full">
                    <AboutStatChart></AboutStatChart>
                </div>
            </div>
        </div>
    )
}

export default Insights
