import React from "react"
import mobileImage from "../assets/portfolio/project1/iphoe.png"
import laptopImage from "../assets/portfolio/project1/laptop.png"
import EachProject from "../components/Pages/Projects/EachProject"
const Projects = () => {
    let dashboardStackDesc = ["React", "Context Api", "CSS", "Chart JS"]
    let fiichargerStackDesc = ["Vue", "Element UI", "SCSS"]
    let portfolioStackDesc = ["React", "Tailwind", "CSS"]
    return (
        <div className="projectMandatory relative h-screen w-screen overflow-scroll overflow-x-hidden">
            {/* send lastitem props to the last component */}
            <EachProject
                component="a"
                mobileImage={mobileImage}
                laptopImage={laptopImage}
                stackTextDesc={dashboardStackDesc}
            ></EachProject>
            <EachProject
                component="b"
                mobileImage={mobileImage}
                laptopImage={laptopImage}
                stackTextDesc={fiichargerStackDesc}
            ></EachProject>
            <EachProject
                component="c"
                mobileImage={mobileImage}
                laptopImage={laptopImage}
                stackTextDesc={portfolioStackDesc}
            ></EachProject>
        </div>
    )
}

export default Projects
