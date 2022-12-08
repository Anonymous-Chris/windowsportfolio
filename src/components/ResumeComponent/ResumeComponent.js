import React, { useState } from "react"
import FileViewer from "react-file-viewer"
import ResumePDF from "../../assets/resume/a.pdf"
import ResumeDOC from "../../assets/resume/b.docx"
const ResumeComponent = () => {
    const [type, setType] = useState("docx")
    const [filePath, setFilePath] = useState(null)

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
        console.log("download pdf")
        // using Java Script method to get PDF file
        fetch(filePath).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob)
                // Setting various property values
                let alink = document.createElement("a")
                alink.href = fileURL
                alink.download = `test.${type}`
                alink.click()
            })
        })
    }
    return (
        <div className="h-full w-full">
            <div className="flex">
                <button className="ml-2" onClick={showDOCX}>
                    DOCX
                </button>
                <button className="ml-2" onClick={showPDF}>
                    PDF
                </button>
                <button className="ml-2" onClick={download}>
                    Download
                </button>
            </div>
            {type && filePath && <FileViewer fileType={type} filePath={filePath} onError={onError} />}{" "}
        </div>
    )
}

export default ResumeComponent
