import React from "react"
import { BsBrush } from "react-icons/bs"
const SettingsMenu = () => {
    return (
        <div className="flex h-full w-full flex-col border-2 border-red-500 p-3">
            <div className="flex items-center space-x-2">
                <div className="relative h-16 w-16">
                    <img
                        draggable="false"
                        className="rounded-full border border-gray-100 shadow-sm"
                        src="https://randomuser.me/api/portraits/men/81.jpg"
                        alt="user"
                    />
                </div>
                <div>profile name</div>
            </div>
            <div className="border-2 border-black">
                <input
                    className="w-full border-none bg-[url('https://static.thenounproject.com/png/101791-200.png')] bg-contain bg-no-repeat pl-10"
                    placeholder="Find a Setting"
                />
            </div>
            <div className="w-full">
                <ul className="flex flex-col items-start">
                    <li className="flex items-center">
                        <span className="text-orange-500">
                            <BsBrush></BsBrush>
                        </span>
                        <span className="ml-2">Personalization</span>
                    </li>
                    {/* add more lists of settings */}
                </ul>
            </div>
        </div>
    )
}

export default SettingsMenu
