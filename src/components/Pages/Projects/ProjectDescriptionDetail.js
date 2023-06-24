import React from "react"

const ProjectDescriptionDetail = ({ projectInfo, projectDesc }) => {
    return (
        <div className="mb-4 flex flex-col text-left text-base">
            {projectInfo.length > 0 &&
                projectInfo.map((item, index) => (
                    <li className="mb-2 list-none" key={index}>
                        {item.desc}
                    </li>
                ))}

            {projectDesc.length > 0 && <span className="mb-4 mt-2 text-4xl font-bold text-green-400">Goals</span>}
            {projectDesc.length > 0 &&
                projectDesc.map((item, index) => (
                    <li className="mb-2" key={index}>
                        {item.desc}
                    </li>
                ))}
        </div>
    )
}

export default ProjectDescriptionDetail
