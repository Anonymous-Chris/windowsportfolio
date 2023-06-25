import React from "react"
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
const SocialMedia = () => {
    const routeSocialMedia = (socialMedia) => {
        if (socialMedia === "linkedin") {
            window.open("https://www.linkedin.com/in/kshitij-lingthep", "_blank")
        } else if (socialMedia === "github") {
            window.open("https://github.com/Anonymous-Chris", "_blank")
        } else if (socialMedia === "facebook") {
            window.open("https://www.facebook.com/", "_blank")
        } else if (socialMedia === "twitter") {
            window.open("https://twitter.com/limbe_me", "_blank")
        }
    }
    return (
        <div className="ml-4 flex h-full w-full flex-col justify-end">
            <h1 className="m-auto text-center text-2xl lg:m-0 lg:text-left
            ">Social Media</h1>
            <div className="m-auto flex flex-row lg:m-0">
                <BsLinkedin
                    className="ml-2 cursor-pointer text-4xl"
                    onClick={() => routeSocialMedia("linkedin")}
                ></BsLinkedin>
                <BsGithub
                    className="ml-2 cursor-pointer text-4xl"
                    onClick={() => routeSocialMedia("github")}
                ></BsGithub>
                <BsFacebook
                    className="ml-2 cursor-pointer text-4xl"
                    onClick={() => routeSocialMedia("facebook")}
                ></BsFacebook>
                <BsTwitter
                    className="ml-2 cursor-pointer text-4xl"
                    onClick={() => routeSocialMedia("twitter")}
                ></BsTwitter>
            </div>
        </div>
    )
}

export default SocialMedia
