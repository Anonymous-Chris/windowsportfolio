import React from "react"
import { BsBrush } from "react-icons/bs"
import Chris from '../../assets/profile/chris/chris.png'
const SettingsMenu = () => {
    return (
        <div className="flex h-full w-full flex-col border-2 p-3">
            <div className="flex items-center space-x-2 mb-4">
                <div className="relative h-16 w-16">
                    <img
                        draggable="false"
                        className="rounded-full border border-gray-100 shadow-sm h-[inherit]"
                        src={Chris}
                        alt="user"
                    />
                </div>
                <div>Kshitij Lingthep</div>
            </div>
            <div className="">
                <input
                    className="w-full border-2 border-gray-600 rounded bg-[url('https://static.thenounproject.com/png/101791-200.png')] bg-contain bg-no-repeat pl-10"
                    placeholder="Find a Setting"
                />
            </div>
            <div className="w-full mt-2">
                <ul className="flex flex-col items-start">
                    <li className="flex items-center cursor-pointer w-[100%] bg-gray-200 rounded p-1">
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
