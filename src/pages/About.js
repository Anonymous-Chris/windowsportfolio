import React from "react"
import Chris from "../assets/profile/chris/chris.png"
import Achievements from "../components/Pages/Achievements"
import GoHome from "../components/Pages/GoHome"
import Insights from "../components/Pages/Insights"
import Interests from "../components/Pages/Interests"
const About = () => {
    return (
        <div className="flex flex-col overflow-hidden p-10">
            <div className="flex flex-col sm:flex-col lg:flex-row">
                <div className="h-full w-full">
                    <img src={Chris} className="mr-auto h-[50%] w-[50%]" />
                    <div className="mt-5 h-[50%]">
                        <Achievements></Achievements>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-3xl">Kshitij Lingthep(Chris L)</h1>
                    <p className="text-orange-600">SOFTWARE ENGINEER</p>
                    <p className="mt-2">Kshitij Loves ........................</p>
                    <div className="mt-5">
                        <Interests></Interests>
                    </div>
                    <div className="mt-5">
                        <Insights></Insights>
                    </div>
                </div>
            </div>
            <GoHome></GoHome>
        </div>
    )
}

export default About
