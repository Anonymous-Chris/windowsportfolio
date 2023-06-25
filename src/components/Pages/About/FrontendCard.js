import React from "react"
import ChartJs from '../../../assets/skills/chartjs-original.svg'
import CssLogo from "../../../assets/skills/css3-original.svg"
import Echarts from '../../../assets/skills/echarts-original.svg'
import HtmlLogo from "../../../assets/skills/html5-original.svg"
import JavascriptLogo from "../../../assets/skills/javascript-original.svg"
import ReactLogo from "../../../assets/skills/react-original.svg"
import ReduxLogo from "../../../assets/skills/redux-original.svg"
import TailwindCssLogo from "../../../assets/skills/tailwindcss-original.svg"
import VueLogo from "../../../assets/skills/vue-original.svg"
import CardItem from "./CardItem"
import Logo from "./Logo"

const FrontendCard = () => {
    return (
        <div className="m-1 flex w-full flex-col justify-start bg-gray-600 bg-opacity-50 p-3 text-left rounded">
            <h1 className="text-3xl font-bold text-green-400 ">Frontend</h1>
            <div className="flex flex-wrap">
                <Logo name="Javascript" logo={JavascriptLogo}></Logo>
                <Logo name="React" logo={ReactLogo}></Logo>
                <Logo name="Redux" logo={ReduxLogo}></Logo>
                <Logo name="Vue" logo={VueLogo}></Logo>
                <Logo name="HTML" logo={HtmlLogo}></Logo>
                <Logo name="CSS" logo={CssLogo}></Logo>
                <Logo name="Tailwind css" logo={TailwindCssLogo}></Logo>
                <Logo name="Chart JS" logo={ChartJs}></Logo>
                <Logo name="Echarts" logo={Echarts}></Logo>
            </div>
            <div className="flex flex-col">
                <CardItem name="Languages" value="Javascript"></CardItem>
                <CardItem name="Frameworks" value="React, Vue"></CardItem>
                <CardItem name="Testing" value="Jest & Enzyme"></CardItem>
                <CardItem name="Tools & Libraries" value="Redux, Vuex, Sass ..."></CardItem>
                <CardItem name="Core" value="HTML & CSS"></CardItem>
            </div>
        </div>
    )
}

export default FrontendCard
