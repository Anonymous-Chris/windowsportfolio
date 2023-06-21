import React, { useEffect, useState } from "react"
import FileViewer from "react-file-viewer"
import ResumeDOC from "../../assets/resume/kshitij_lingthep.docx"
import ResumePDF from "../../assets/resume/kshitij_lingthep.pdf"
const ResumeComponent = ({ resumeType }) => {
    const [type, setType] = useState("")
    const [filePath, setFilePath] = useState(null)

    useEffect(() => {
        setType(resumeType)

        if (resumeType === "docx") {
            setFilePath(ResumeDOC)
        } else {
            setFilePath(ResumePDF)
        }
    }, [resumeType])
    const onError = (e) => {
        console.log(e, "error in file-viewer")
    }
    const showDOCX = () => {
        setType("docx")
        setFilePath(ResumeDOC)
    }

    const showPDF = () => {
        setType("pdf")
        setFilePath(ResumePDF)
    }

    const download = () => {
        // using Java Script method to get PDF file
        fetch(filePath).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob)
                // Setting various property values
                let alink = document.createElement("a")
                alink.href = fileURL
                alink.download = `resume.${type}`
                alink.click()
            })
        })
    }
    return (
        <div className={`h-full w-full bg-white ${type === "docx" ? " text-black" : ""}`}>
            <div className="flex text-black">
                <button
                    class="ml-2 mt-2 inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400"
                    onClick={showDOCX}
                >
                    DOCX
                </button>
                <button
                    class="ml-2 mt-2 inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400"
                    onClick={showPDF}
                >
                    PDF
                </button>
                <button
                    class="ml-2 mt-2 inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400"
                    onClick={download}
                >
                    <svg class="mr-2 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download</span>
                </button>
            </div>
            {type && filePath && <FileViewer fileType={type} filePath={filePath} onError={onError} />}
        </div>
    )
}

export default ResumeComponent
