import React from "react"
import Chris from "../assets/profile/chris/chris.png"
import Achievements from "../components/Pages/About/Achievements"
import Insights from "../components/Pages/About/Insights"
import Interests from "../components/Pages/About/Interests"
import Skills from "../components/Pages/About/Skills"
import SocialMedia from "../components/Pages/About/SocialMedia"
import GoHome from "../components/Pages/Common/GoHome"
const About = () => {
    return (
        <div className="flex flex-col overflow-hidden p-10">
            <div className="flex flex-col sm:flex-col lg:flex-row">
                <div className="h-full w-full">
                    <div className="flex w-full flex-row">
                        <div className="h-[50%] w-[50%]">
                            <img draggable="false" src={Chris} className="mr-auto h-full w-full" alt="profile" />
                        </div>
                        <div className="hidden w-[50%] lg:block">
                            <SocialMedia></SocialMedia>
                        </div>
                    </div>
                    <div className="mt-5 hidden h-[50%] w-full lg:block">
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

                    <div className="mt-5 h-[50%] w-full  lg:hidden">
                        <Achievements></Achievements>
                    </div>
                    <div className="mt-5">
                        <Insights></Insights>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Skills></Skills>
            </div>
            <div className="w-full lg:hidden">
                <SocialMedia></SocialMedia>
            </div>
            <GoHome></GoHome>
        </div>
    )
}

export default About
