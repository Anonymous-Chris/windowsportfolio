import React from "react"
import digitalTwinOverviewDesktop from "../assets/portfolio/digitaltwin/overview_desktop.png"
import digitalTwinOverviewMobile from "../assets/portfolio/digitaltwin/overview_mobile.png"
import fiichargerStationDesktop from "../assets/portfolio/fiicharger/station_desktop.png"
import fiichargerStationMobile from "../assets/portfolio/fiicharger/station_mobile.png"
import surveillanceDesktop from "../assets/portfolio/surveillance/surveillance_desktop.png"
import surveillanceMobile from "../assets/portfolio/surveillance/surveillance_mobile.png"
import EachProject from "../components/Pages/Projects/EachProject"
const Projects = () => {
    let dashboardStackDesc = ["React", "Context Api", "CSS", "Chart JS"]
    let fiichargerStackDesc = ["Vue", "Element UI", "SCSS"]
    let portfolioStackDesc = ["React", "Tailwind", "CSS"]
    return (
        <div className="projectMandatory relative h-screen w-screen overflow-scroll overflow-x-hidden">
            {/* send lastitem props to the last component */}
            <EachProject
                component="digitaltwin"
                mobileImage={digitalTwinOverviewMobile}
                laptopImage={digitalTwinOverviewDesktop}
                stackTextDesc={dashboardStackDesc}
            ></EachProject>
            <EachProject
                component="fiicharger"
                mobileImage={fiichargerStationMobile}
                laptopImage={fiichargerStationDesktop}
                stackTextDesc={fiichargerStackDesc}
            ></EachProject>
            <EachProject
                component="overall"
                mobileImage={surveillanceMobile}
                laptopImage={surveillanceDesktop}
                stackTextDesc={portfolioStackDesc}
            ></EachProject>
        </div>
    )
}

export default Projects
