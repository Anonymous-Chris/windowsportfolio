import React from 'react'
import CSharpLogo from "../../../assets/skills/csharp-original.svg"
import DotNetLogo from '../../../assets/skills/dotnet-original.svg'
import ExpressLogo from "../../../assets/skills/express-original.svg"
import JavaLogo from '../../../assets/skills/java-original.svg'
import LinuxLogo from "../../../assets/skills/linux-original.svg"
import MongodbLogo from "../../../assets/skills/mongodb-original.svg"
import MysqlLogo from "../../../assets/skills/mysql-original.svg"
import NextJSLogo from "../../../assets/skills/nextjs-original.svg"
import CardItem from "./CardItem"
import Logo from "./Logo"
const BackendCard = () => {
    return (
        <div className="m-1 flex w-full flex-col justify-start rounded bg-gray-600  bg-opacity-50 p-3 text-left">
            <h1 className="text-3xl font-bold text-green-400 ">Backend</h1>
            <div className="flex flex-wrap">
                <Logo name="Express" logo={ExpressLogo}></Logo>
                <Logo name="Linux" logo={LinuxLogo}></Logo>
                <Logo name="Mongodb" logo={MongodbLogo}></Logo>
                <Logo name="MySQL" logo={MysqlLogo}></Logo>
                <Logo name="Next JS" logo={NextJSLogo}></Logo>
                <Logo name="C#" logo={CSharpLogo}></Logo>
                <Logo name=".NET Core" logo={DotNetLogo}></Logo>
                <Logo name="Java" logo={JavaLogo}></Logo>
            </div>
            <div className="flex flex-col">
                <CardItem name="Languages" value="Javascript, Java"></CardItem>
                <CardItem name="Frameworks" value="Express, SpringBoot, .NET Core"></CardItem>
                <CardItem name="Databases" value="MySQL & Mongo"></CardItem>
                <CardItem name="API" value="REST"></CardItem>
                <CardItem name="Deployment" value="Github, Gitlab, Docker ..."></CardItem>
            </div>
        </div>
    )
}

export default BackendCard