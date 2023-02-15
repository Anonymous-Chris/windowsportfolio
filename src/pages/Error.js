import React from "react"
import GoHome from "../components/Pages/GoHome"
const Error = () => {
    return (
        <div className="flex h-auto w-full flex-col text-center ">
            <div className="flex justify-center">
                <h1 className="text-[80px]">404</h1>
            </div>
            <div className="flex h-[400px] justify-center bg-notFound bg-center bg-no-repeat"></div>
            <div className="flex flex-col">
                <h3 className="text-[42px]"> Look like you're lost</h3>
                <p className="text-[18px]">The page you are looking for is not avaible!</p>
                <GoHome></GoHome>
            </div>
        </div>
    )
}

export default Error
