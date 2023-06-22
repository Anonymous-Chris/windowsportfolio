import React from "react"
import Chris from "../assets/profile/chris/chris.png"
import Achievements from "../components/Pages/About/Achievements"
import Insights from "../components/Pages/About/Insights"
import Interests from "../components/Pages/About/Interests"
import Skills from "../components/Pages/About/Skills"
import SocialMedia from "../components/Pages/About/SocialMedia"
import GoHome from "../components/Pages/Common/GoHome"
const About = () => {
        let totalExperience = new Date().getFullYear() - 2020
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
                        <h1 className="text-4xl">Kshitij Lingthep(Chris L)</h1>
                        <p className="text-xl text-orange-600">SOFTWARE ENGINEER</p>
                        <p className="mt-2">
                            I am a highly skilled software engineer with {totalExperience} years of experience in
                            developing innovative software solutions. I possess a strong foundation in Computer Science
                            and an expertise in Software Development using latest technologies. With a proven track
                            record of delivering high-quality projects, I excel in translating business requirements
                            into technical solutions. My collaborative mindset, strong problem-solving skills, and
                            commitment to staying updated with the latest technologies make me an ideal candidate for
                            any software engineering role.
                        </p>
                        <div className="mt-5">
                            <Interests></Interests>
                        </div>

                        <div className="mt-5 h-[50%] w-full lg:hidden">
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
