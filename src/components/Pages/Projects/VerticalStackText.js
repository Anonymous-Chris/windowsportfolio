import React from "react"

const VerticalStackText = ({ stackTextDesc }) => {
    return (
        <div className="verticalText flex">
            {stackTextDesc &&
                stackTextDesc.length > 0 &&
                stackTextDesc.map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="mt-2 mb-2">{item}</span>
                        {stackTextDesc.length > index + 1 && (
                            <span className="m-auto h-3 w-3 rounded-full bg-green-400"></span>
                        )}
                    </React.Fragment>
                ))}
        </div>
    )
}

export default VerticalStackText
