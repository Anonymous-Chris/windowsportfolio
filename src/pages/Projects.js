import React, { useEffect, useState } from "react"
import EachProject from "../components/Pages/Projects/EachProject"
import ProjectsData from "../Data/ProjectsData"
const Projects = () => {
    //remove all hidden projects
    let projectData = ProjectsData().filter((item) => item.show)
    const [randomIndexLaptop, setRandomIndexLaptop] = useState([])
    useEffect(() => {
        // create random choosing of images every 30 seconds
        let indexInterval = setInterval(() => {
            generaterandomIndexLaptopes(projectData)
        }, 30000)
        return () => {
            clearInterval(indexInterval)
        }
    }, [projectData])

    const generaterandomIndexLaptopes = (data) => {
        let _indexLaptop = data.map((item) => Math.floor(Math.random() * item.laptopImage.length))
        setRandomIndexLaptop(_indexLaptop)
    }
    return (
        <div className="projectMandatory relative h-screen w-screen overflow-scroll overflow-x-hidden">
            {/* send lastitem props to the last component */}
            {projectData.length > 0 &&
                projectData.map(
                    (item, index) =>
                        item.show && (
                            <EachProject
                                key={index}
                                name={item.component}
                                config={item.config}
                                mobileImage={item.mobileImage[randomIndexLaptop[index]] || item.mobileImage[0]}
                                laptopImage={item.laptopImage[randomIndexLaptop[index]] || item.laptopImage[0]}
                                stackTextDesc={item.stack}
                                projectDesc={item.projectDesc}
                                //check last item dynamically
                                lastItem={index === projectData.length - 1}
                            ></EachProject>
                        )
                )}
        </div>
    )
}

export default Projects
