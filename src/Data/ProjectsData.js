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

const ProjectsData = () => {
    let data = [
        {
            show: true,
            component: "digitalTwin",
            stack: ["React", "Context Api", "CSS", "Chart JS"],
            laptopImage: [digitalTwinOverviewDesktop, digitalTwinFmcsDesktop, digitalTwinBsiDesktop],
            mobileImage: [digitalTwinOverviewMobile, digitalTwinBsiMobile],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectDesc: [
                {
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                },
                {
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
            ]
        },
        {
            show: true,
            component: "fiicharger",
            stack: ["Vue", "Element UI", "SCSS"],
            laptopImage: [fiichargerStationDesktop, fiichargerReportsnDesktop, fiichargerPdfDesktop],
            mobileImage: [fiichargerStationMobile, fiichargerReportsMobile],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectDesc: []
        },
        {
            show: true,
            component: "surveillance",
            stack: ["React", "CSS"],
            laptopImage: [surveillanceDesktop, surveillanceHomeDesktop, surveillancePhotoDesktop],
            mobileImage: [surveillanceMobile, surveillanceHomeMobile, surveillanceVideoMobile],
            config: {
                isLive: true,
                hasGithub: true,
                liveUrl: "https://anonymous-chris.github.io/overall/#/",
                githubUrl: "https://github.com/Anonymous-Chris/overall"
            },
            projectDesc: []
        },
        {
            show: false,
            component: "portfolio",
            stack: [],
            laptopImage: [],
            mobileImage: [],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectDesc: []
        }
    ]
    return data
}

export default ProjectsData
