import React from "react"
import ChartJsLogo from "../../../assets/skills/chartjs-original.svg"
import CSharpLogo from "../../../assets/skills/csharp-original.svg"
import CssLogo from "../../../assets/skills/css3-original.svg"
import DotNetLogo from "../../../assets/skills/dotnet-original.svg"
import EChartsLogo from "../../../assets/skills/echarts-original.svg"
import ElementUiLogo from "../../../assets/skills/elementui-original.svg"
import ExpressLogo from "../../../assets/skills/express-original.svg"
import HtmlLogo from "../../../assets/skills/html5-original.svg"
import JavaLogo from "../../../assets/skills/java-original.svg"
import JavascriptLogo from "../../../assets/skills/javascript-original.svg"
import LinuxLogo from "../../../assets/skills/linux-original.svg"
import MongodbLogo from "../../../assets/skills/mongodb-original.svg"
import MysqlLogo from "../../../assets/skills/mysql-original.svg"
import NextJSLogo from "../../../assets/skills/nextjs-original.svg"
import PhotopeaLogo from "../../../assets/skills/photopea-original.svg"
import ReactLogo from "../../../assets/skills/react-original.svg"
import ReduxLogo from "../../../assets/skills/redux-original.svg"
import TailwindLogo from "../../../assets/skills/tailwindcss-original.svg"
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
            return <Logo name="MySQL" logo={MysqlLogo} hover={"true"}></Logo>
        } else if (name === "next") {
            return <Logo name="Next JS" logo={NextJSLogo} hover={"true"}></Logo>
        } else if (name.includes("chart")) {
            return <Logo name="Chart JS" logo={ChartJsLogo} hover={"true"}></Logo>
        } else if (name.includes("c#")) {
            return <Logo name="C#" logo={CSharpLogo} hover={"true"}></Logo>
        } else if (name.includes(".net")) {
            return <Logo name=".NET" logo={DotNetLogo} hover={"true"}></Logo>
        } else if (name.includes("echarts")) {
            return <Logo name="ECharts" logo={EChartsLogo} hover={"true"}></Logo>
        } else if (name.includes("java")) {
            return <Logo name="Java" logo={JavaLogo} hover={"true"}></Logo>
        } else if (name.includes("photopea")) {
            return <Logo name="Photopea" logo={PhotopeaLogo} hover={"true"}></Logo>
        } else if (name.includes("tailwind")) {
            return <Logo name="Tailwind" logo={TailwindLogo} hover={"true"}></Logo>
        } else if (name.includes("element")) {
            return <Logo name="Element UI" logo={ElementUiLogo} hover={"true"}></Logo>
        }
        //add all icons for stack
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
