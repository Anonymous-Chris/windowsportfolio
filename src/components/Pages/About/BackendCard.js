import React from 'react'
import ExpressLogo from "../../../assets/skills/express-original.svg"
import LinuxLogo from "../../../assets/skills/linux-original.svg"
import MongodbLogo from "../../../assets/skills/mongodb-original.svg"
import mysqlLogo from "../../../assets/skills/mysql-original.svg"
import nextJSLogo from "../../../assets/skills/nextjs-original.svg"
import CardItem from "./CardItem"
import Logo from "./Logo"

const BackendCard = () => {
    return (
        <div className="bg-opacity-50 bg-gray-600 m-1 flex w-full flex-col justify-start  p-3 text-left">
            <h1 className="text-3xl font-bold text-green-400 ">Backend</h1>
            <div className="flex flex-wrap">
                <Logo name="Express" logo={ExpressLogo}></Logo>
                <Logo name="Linux" logo={LinuxLogo}></Logo>
                <Logo name="Mongodb" logo={MongodbLogo}></Logo>
                <Logo name="MySQL" logo={mysqlLogo}></Logo>
                <Logo name="Next JS" logo={nextJSLogo}></Logo>{" "}
            </div>
            <div className="flex flex-col">
                <CardItem name="Languages" value="Javascript, Java"></CardItem>
                <CardItem name="Frameworks" value="Express, SpringBoot"></CardItem>
                <CardItem name="Databases" value="MySQL & Mongo"></CardItem>
                <CardItem name="API" value="REST"></CardItem>
                <CardItem name="Deployment" value="Netlify, Heroku, Github"></CardItem>
            </div>
        </div>
    )
}

export default BackendCard