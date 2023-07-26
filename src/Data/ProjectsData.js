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
import windowsDesktop from '../assets/portfolio/windows/portfolio_desktop.png'
import windowsMobile from '../assets/portfolio/windows/portfolio_mobile.png'
const ProjectsData = () => {
    let data = [
        {
            show: true,
            component: "Digital Twin",
            stack: ["React", "Context Api", "CSS", "Chart JS", "Java"],
            laptopImage: [digitalTwinOverviewDesktop, digitalTwinFmcsDesktop, digitalTwinBsiDesktop],
            mobileImage: [digitalTwinOverviewMobile, digitalTwinBsiMobile],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectInfo: [
                {
                    desc: "A digital twin project is an innovative technology that creates a virtual replica or model of a physical object, process, or system using sensors, data analytics, and machine learning algorithms."
                }
            ],
            projectDesc: [
                {
                    desc: "Simulate the production process, predict potential issues, and optimize the manufacturing process."
                },
                {
                    desc: "Revolutionize the way we design, build, and operate physical systems and objects, leading to more efficient and cost-effective processes, reduced downtime, and improved performance."
                },
                {
                    desc: "Develop visualizations of data in various formats, such as bar charts, line and bar charts, heatmaps, and waterfall charts using technologies like React, CSS, Chart JS, and Grafana."
                },
                {
                    desc: "Utilize Java Spring Boot as a backend framework to create APIs and integrate with the frontend for data retrieval and manipulation."
                }
            ]
        },
        {
            show: true,
            component: "Fiicharger",
            stack: ["Vue", "Element UI", "SCSS", "C#", ".NET"],
            laptopImage: [fiichargerStationDesktop, fiichargerReportsnDesktop, fiichargerPdfDesktop],
            mobileImage: [fiichargerStationMobile, fiichargerReportsMobile],
            config: {
                isLive: true,
                hasGithub: false,
                liveUrl: "https://management.evucharging.com/",
                githubUrl: ""
            },
            projectInfo: [
                {
                    desc: "Fiicharger is an EV management solution that optimizes the charging, usage, and operations of electric vehicles. It includes features such as charging infrastructure management, a network of charging stations, billing and payment systems, energy management and load balancing, fleet management capabilities, smart grid integration, and data analytics. Fiicharger streamlines EV charging, improves efficiency, reduces costs, and enhances user experiences."
                }
            ],
            projectDesc: [
                {
                    desc: "Develop and maintain an EV charging management solution, ensuring smooth operation and optimal user experience."
                },
                {
                    desc: "Implement comprehensive features for efficient management of charging stations, chargers, pricing, and personalized charging profiles."
                },
                {
                    desc: "Develop a robust reporting system that employs advanced filtering techniques, enabling in-depth data analysis and actionable insights."
                },
                {
                    desc: "Integrate interactive maps and graphs for enhanced data visualization, facilitating intuitive interpretation of charging data."
                }
            ]
        },
        {
            show: true,
            component: "Surveillance",
            stack: ["React", "CSS", "Java", "Context API"],
            laptopImage: [surveillanceDesktop, surveillanceHomeDesktop, surveillancePhotoDesktop],
            mobileImage: [surveillanceMobile, surveillanceHomeMobile, surveillanceVideoMobile],
            config: {
                isLive: true,
                hasGithub: true,
                liveUrl: "https://anonymous-chris.github.io/overall/#/surveillance",
                githubUrl: "https://github.com/Anonymous-Chris/overall"
            },
            projectInfo: [
                {
                    desc: "Surveillance systems were vital in monitoring the spread of COVID-19, as well as detecting and responding to smoke and fire incidents. They utilized data from case reports, testing, hospitalizations, contact tracing, smoke detectors, and fire alarms. These systems identified COVID-19 hotspots, assessed public health measures, aided targeted interventions, and promptly alerted authorities to smoke and fire hazards."
                }
            ],
            projectDesc: [
                {
                    desc: "Monitor and analyze footage to ensure compliance with COVID-19 safety guidelines, as well as detect smoke and fire hazards."
                },
                {
                    desc: "Utilize heatmaps to identify crowded areas, as well as identify areas affected by smoke or fire incidents and suggest appropriate actions."
                },
                {
                    desc: "Develop visual representations of data using graphs such as bar and pie charts to track COVID-19 cases and visualize the severity of smoke or fire incidents."
                },
                {
                    desc: "Train new team members on surveillance technologies, data analysis techniques, and procedures for smoke and fire detection."
                }
            ]
        },
        {
            show: true,
            component: "Portfolio",
            stack: ["React", "Context API", "CSS", "Tailwind"],
            laptopImage: [windowsDesktop],
            mobileImage: [windowsMobile],
            config: {
                isLive: true,
                hasGithub: true,
                liveUrl: "kshitijlingthep.com",
                githubUrl: "https://github.com/Anonymous-Chris"
            },
            projectInfo: [
                {
                    desc: "Create a captivating portfolio website with a Windows 11 theme to showcase your work professionally. Utilize the sleek design elements, vibrant colors, and clean typography to highlight projects and skills effectively. Leverage interactive widgets and smooth transitions to provide an immersive and engaging browsing experience for visitors."
                }
            ],
            projectDesc: [
                {
                    desc: "Create a portfolio website using React and Tailwind"
                }
            ]
        }
    ]
    return data
}

export default ProjectsData
