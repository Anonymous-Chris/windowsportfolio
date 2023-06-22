import React from "react"
import EachItemList from "../Common/EachItemList"
const Achievements = () => {
    return (
        <React.Fragment>
            <h1 className="text-3xl">Achievements</h1>
            <EachItemList desc="Developed and deployed multiple internal NPM packages within the company, focusing on automating tasks and customizing consistent components for internal projects."></EachItemList>
            <EachItemList desc="The digital twin delivered impressive results for our client, including an 18.07% revenue increase in monthly throughput, a 48.1% reduction in machine and equipment expenses, and the elimination of 5,442 kWh of electrical waste per month, equivalent to 1.398 tons of CO2"></EachItemList>
            <EachItemList desc="Successfully implemented CI/CD pipelines within GitLab, becoming the first team in Mt. Pleasant to adopt these technologies."></EachItemList>
        </React.Fragment>
    )
}

export default Achievements
