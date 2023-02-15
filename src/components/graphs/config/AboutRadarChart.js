import React from "react"
import CommonChart from "../CommonChart"
const AboutRadarChart = () => {
    let options = {
        legend: {
            show: false
        },
        radar: {
            indicator: [
                { name: "Meeting", max: 100 },
                { name: "Code Review", max: 100 },
                { name: "Coding", max: 100 },
                { name: "Documentation", max: 100 },
                { name: "Design", max: 100 }
            ]
        },
        series: [
            {
                name: "Performance radar",
                type: "radar",
                data: [
                    {
                        value: [100, 100, 100, 100, 100],
                        name: "Total"
                    },
                    {
                        value: [100, 70, 80, 85, 65],
                        name: "Performance"
                    }
                ]
            }
        ],
        color: ["green", "#8b3811"]
    }

    return (
        <div className="" style={{ width: "auto", height: "300px" }}>
            <CommonChart options={options} />
        </div>
    )
}

export default AboutRadarChart
