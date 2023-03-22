import React, { useEffect, useState } from "react"
import digitalTwinBsiDesktop from "../assets/portfolio/digitaltwin/bsi_desktop.png"
import digitalTwinBsiMobile from "../assets/portfolio/digitaltwin/bsi_mobile.png"
import digitalTwinFmcsDesktop from "../assets/portfolio/digitaltwin/fmcs_desktop.png"
import digitalTwinOverviewDesktop from "../assets/portfolio/digitaltwin/overview_desktop.png"
import digitalTwinOverviewMobile from "../assets/portfolio/digitaltwin/overview_mobile.png"
import fiichargerPdfDesktop from "../assets/portfolio/fiicharger/pdf_desktop.png"
import fiichargerReportsnDesktop from "../assets/portfolio/fiicharger/reports_desktop.png"
import fiichargerReportsMobile from "../assets/portfolio/fiicharger/reports_mobile.png"
import fiichargerStationDesktop from "../assets/portfolio/fiicharger/station_desktop.png"
import fiichargerStationMobile from "../assets/portfolio/fiicharger/station_mobile.png"
import surveillanceHomeDesktop from "../assets/portfolio/surveillance/home_desktop.png"
import surveillanceHomeMobile from "../assets/portfolio/surveillance/home_mobile.png"
import surveillancePhotoDesktop from "../assets/portfolio/surveillance/photo_desktop.png"
import surveillanceDesktop from "../assets/portfolio/surveillance/surveillance_desktop.png"
import surveillanceMobile from "../assets/portfolio/surveillance/surveillance_mobile.png"
import surveillanceVideoMobile from "../assets/portfolio/surveillance/video_mobile.png"
import EachProject from "../components/Pages/Projects/EachProject"
const Projects = () => {
    let dashboardStackDesc = ["React", "Context Api", "CSS", "Chart JS"]
    let fiichargerStackDesc = ["Vue", "Element UI", "SCSS"]
    let portfolioStackDesc = ["React", "Tailwind", "CSS"]
    let digitalTwinDesktopImage = [digitalTwinOverviewDesktop, digitalTwinFmcsDesktop, digitalTwinBsiDesktop]
    let digitalTwinMobileImage = [digitalTwinOverviewMobile, digitalTwinBsiMobile]
    let fiichargerDesktopImage = [fiichargerStationDesktop, fiichargerReportsnDesktop, fiichargerPdfDesktop]
    let fiichargerMobileImage = [fiichargerStationMobile, fiichargerReportsMobile]
    let surveillanceDesktopImage = [surveillanceDesktop, surveillanceHomeDesktop, surveillancePhotoDesktop]
    let surveillanceMobileImage = [surveillanceMobile, surveillanceHomeMobile, surveillanceVideoMobile]
    const [digitaltwinIndex, setDigitalTwinIndex] = useState(0)
    const [fiichargerIndex, setFiichargerIndex] = useState(0)
    const [surveillanceIndex, setSurveillanceIndx] = useState(0)

    useEffect(() => {
        // create random choosing of images every 30 seconds
        let indexInterval = setInterval(() => {
            let _digitalTwinIndex = Math.floor(Math.random() * digitalTwinDesktopImage.length)
            setDigitalTwinIndex(_digitalTwinIndex)
            let _fiichargerIndex = Math.floor(Math.random() * fiichargerDesktopImage.length)
            setFiichargerIndex(_fiichargerIndex)
            let _surveillanceIndex = Math.floor(Math.random() * surveillanceDesktopImage.length)
            setSurveillanceIndx(_surveillanceIndex)
        }, 30000)
        return () => {
            clearInterval(indexInterval)
        }
    }, [digitalTwinDesktopImage.length, fiichargerDesktopImage.length, surveillanceDesktopImage.length])
    return (
        <div className="projectMandatory relative h-screen w-screen overflow-scroll overflow-x-hidden">
            {/* send lastitem props to the last component */}
            <EachProject
                component="digitaltwin"
                mobileImage={digitalTwinMobileImage[digitaltwinIndex] || digitalTwinMobileImage[0]}
                laptopImage={digitalTwinDesktopImage[digitaltwinIndex] || digitalTwinDesktopImage[0]}
                stackTextDesc={dashboardStackDesc}
            ></EachProject>
            <EachProject
                component="fiicharger"
                mobileImage={fiichargerMobileImage[fiichargerIndex] || fiichargerMobileImage[0]}
                laptopImage={fiichargerDesktopImage[fiichargerIndex] || fiichargerDesktopImage[0]}
                stackTextDesc={fiichargerStackDesc}
            ></EachProject>
            <EachProject
                component="surveillance"
                mobileImage={surveillanceMobileImage[surveillanceIndex] || surveillanceMobileImage[0]}
                laptopImage={surveillanceDesktopImage[surveillanceIndex] || surveillanceDesktopImage[0]}
                stackTextDesc={portfolioStackDesc}
            ></EachProject>
        </div>
    )
}

export default Projects
