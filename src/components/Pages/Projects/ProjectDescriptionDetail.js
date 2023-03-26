import React from 'react'

const ProjectDescriptionDetail = ({ projectDesc }) => {
    return (
        <div className="mb-3 flex flex-col text-left">
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