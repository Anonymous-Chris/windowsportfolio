import React from "react"
import chartJsLogo from "../../../assets/skills/chartjs-original.svg"
import CssLogo from "../../../assets/skills/css3-original.svg"
import ExpressLogo from "../../../assets/skills/express-original.svg"
import HtmlLogo from "../../../assets/skills/html5-original.svg"
import JavascriptLogo from "../../../assets/skills/javascript-original.svg"
import LinuxLogo from "../../../assets/skills/linux-original.svg"
import MongodbLogo from "../../../assets/skills/mongodb-original.svg"
import mysqlLogo from "../../../assets/skills/mysql-original.svg"
import nextJSLogo from "../../../assets/skills/nextjs-original.svg"
import ReactLogo from "../../../assets/skills/react-original.svg"
import ReduxLogo from "../../../assets/skills/redux-original.svg"
import VueLogo from "../../../assets/skills/vue-original.svg"
import Logo from "../About/Logo"

const HorizontalIconsStack = ({ stackTextDesc }) => {
    const getIcons = (iconName) => {
        // console.log(iconName)
        let name = iconName.toLowerCase()
        if (name === "javascript") {
            return <Logo name="Javascript" logo={JavascriptLogo} hover={"true"}></Logo>
        } else if (name === "react") {
            return <Logo name="React" logo={ReactLogo} hover={"true"}></Logo>
        } else if (name === "redux") {
            return <Logo name="Redux" logo={ReduxLogo} hover={"true"}></Logo>
        } else if (name === "vue") {
            return <Logo name="Vue" logo={VueLogo} hover={"true"}></Logo>
        } else if (name === "htnk") {
            return <Logo name="HTML" logo={HtmlLogo} hover={"true"}></Logo>
        } else if (name === "css") {
            return <Logo name="CSS" logo={CssLogo} hover={"true"}></Logo>
        } else if (name === "express") {
            return <Logo name="Express" logo={ExpressLogo} hover={"true"}></Logo>
        } else if (name === "linux") {
            return <Logo name="Linux" logo={LinuxLogo} hover={"true"}></Logo>
        } else if (name === "mongodb") {
            return <Logo name="Mongodb" logo={MongodbLogo} hover={"true"}></Logo>
        } else if (name === "mysql") {
            return <Logo name="MySQL" logo={mysqlLogo} hover={"true"}></Logo>
        } else if (name === "next") {
            return <Logo name="Next JS" logo={nextJSLogo} hover={"true"}></Logo>
        } else if (name.includes("chart")) {
            return <Logo name="Chart JS" logo={chartJsLogo} hover={"true"}></Logo>
        }
    }
    return (
        <div className="mb-2 flex justify-center">
            {stackTextDesc &&
                stackTextDesc.length > 0 &&
                stackTextDesc.map((item) => React.Children.toArray(getIcons(item)))}
        </div>
    )
}

export default HorizontalIconsStack
