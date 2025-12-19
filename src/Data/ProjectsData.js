import andonHomeDesktop from '../assets/portfolio/andon/home_desktop.png'
import andonHomeMobile from '../assets/portfolio/andon/home_mobile.png'
import andonModuleDesktop from '../assets/portfolio/andon/module_desktop.png'
import andonPackingDesktop from '../assets/portfolio/andon/packing_desktop.png'
import andonPackingMobile from '../assets/portfolio/andon/packing_mobile.png'
import confidentialDesktop from '../assets/portfolio/confidential/confidential_desktop.png'
import confidentialMobile from '../assets/portfolio/confidential/confidential_mobile.png'
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
            component: "MES System (Confidential)",
            stack: ["C#", ".NET", "Oracle DB", "MVC"],
            laptopImage: [confidentialDesktop],
            mobileImage: [confidentialMobile],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectInfo: [
                {
                    desc: "A Manufacturing Execution System (MES) is a core manufacturing application that enables real-time monitoring, control, and optimization of shop-floor operations. The MES solution captures production, machine, and quality data to ensure full traceability, improve operational efficiency, and support informed decision-making throughout the manufacturing lifecycle."
                }
            ],
            projectDesc: [
                {
                    desc: "Enable real-time tracking and control of manufacturing processes to improve production visibility, traceability, and compliance with quality standards."
                },
                {
                    desc: "Collect and analyze machine and process data to identify inefficiencies, reduce downtime, and enhance overall equipment effectiveness (OEE)."
                },
                {
                    desc: "Develop interactive dashboards and reports using frontend technologies integrated with the MES to visualize key production metrics and performance trends."
                },
                {
                    desc: "Build scalable and secure backend services using C# and .NET to implement business logic, data processing, and seamless integration with databases and external manufacturing systems."
                }
            ]
        },
        {
            show: true,
            component: "Andon Board",
            stack: ["HTML", "CSS", "JS", "C#", ".NET", "SignalR"],
            laptopImage: [andonHomeDesktop, andonModuleDesktop, andonPackingDesktop],
            mobileImage: [andonHomeMobile, andonPackingMobile],
            config: {
                isLive: false,
                hasGithub: false,
                liveUrl: "",
                githubUrl: ""
            },
            projectInfo: [
                {
                    desc: "The Andon Board is a real-time manufacturing monitoring system designed to provide instant visibility into equipment status and production performance across the shop floor. The application enables continuous tracking of machine states, downtime, and process goals while facilitating effective communication between managers and operators. Built using C#, .NET, SignalR, and Oracle, the system ensures low-latency updates and reliable data synchronization across connected devices."
                }
            ],
            projectDesc: [
                {
                    desc: "Display live equipment status and continuously monitor all manufacturing equipment to improve operational awareness and response time."
                },
                {
                    desc: "Track and analyze equipment downtime to identify recurring issues, reduce production interruptions, and improve overall efficiency."
                },
                {
                    desc: "Enable manager-to-operator communication through notes and alerts, ensuring timely information sharing and issue resolution."
                },
                {
                    desc: "Define and monitor process-level goals to track performance against targets in real time."
                },
                {
                    desc: "Implement an admin dashboard to manage connected devices, monitor system health, and reset connections when required."
                },
                {
                    desc: "Ensure robust logging and diagnostics using Log4js, with data persistence and reporting supported by Oracle databases."
                }
            ]
        },
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
