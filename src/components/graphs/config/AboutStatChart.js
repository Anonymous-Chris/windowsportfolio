import React from "react"
import CommonChart from "../CommonChart"

const AboutStatChart = () => {
    // started working from 2020
    let totalExperience = new Date().getFullYear() - 2020
    let others = new Date().getFullYear() - 1995 - totalExperience
    let totalCoffee = 12
    let coffee = new Date().getHours() % 12
    const experienceOptions = {
        tooltip: {
            show: false,
            trigger: "none"
        },
        legend: {
            show: false
        },
        series: [
            {
                name: "Age",
                type: "pie",
                radius: ["80%", "98%"],
                avoidLabelOverlap: false,
                silent: true, // remove hover effect
                label: {
                    show: true,
                    position: "center",
                    formatter: () => {
                        return totalExperience
                    },
                    fontSize: "26px",
                    color: "white"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: totalExperience, name: "Experience" },
                    { value: others, name: "Others" }
                ],
                color: ["#8b3811", "grey"]
            }
        ]
    }
    const coffeOptions = {
        tooltip: {
            show: false,
            trigger: "none"
        },
        legend: {
            show: false
        },
        series: [
            {
                name: "Coffee",
                type: "pie",
                radius: ["80%", "98%"],
                avoidLabelOverlap: false,
                silent: true, // remove hover effect
                label: {
                    show: true,
                    position: "center",
                    formatter: () => {
                        return coffee
                    },
                    fontSize: "26px",
                    color: "white"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: coffee, name: "Coffee" },
                    { value: totalCoffee, name: "Total Coffee" }
                ],
                color: ["#8b3811", "grey"]
            }
        ]
    }
    const learningOptions = {
        tooltip: {
            show: false,
            trigger: "none"
        },
        legend: {
            show: false
        },
        series: [
            {
                name: "Learn",
                type: "pie",
                radius: ["80%", "98%"],
                avoidLabelOverlap: false,
                silent: true, // remove hover effect
                label: {
                    show: true,
                    position: "center",
                    formatter: () => {
                        return others + totalExperience
                    },
                    fontSize: "26px",
                    color: "white"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: others + totalExperience, name: "Learn" },
                    { value: 0, name: "Total Learn" }
                ],
                color: ["#8b3811", "grey"]
            }
        ]
    }
    return (
        <div className="flex flex-row flex-wrap">
            <div className="flex w-[200px]  flex-col justify-center p-2 text-center">
                <div className="" style={{ width: "inherit", height: "130px" }}>
                    <CommonChart options={experienceOptions} />
                </div>
                <div className="w-[inherit]">YEARS EXP.</div>
            </div>
            <div className="flex w-[200px]  flex-col justify-center p-2 text-center">
                <div className="" style={{ width: "inherit", height: "130px" }}>
                    <CommonChart options={coffeOptions} />
                </div>
                <div className="w-[inherit]">COFFEE</div>
            </div>
            <div className="flex w-[200px]  flex-col justify-center p-2 text-center">
                <div className="" style={{ width: "inherit", height: "130px" }}>
                    <CommonChart options={learningOptions} />
                </div>
                <div className="w-[inherit]">LEARNING YEARS</div>
            </div>
        </div>
    )
}

export default AboutStatChart
