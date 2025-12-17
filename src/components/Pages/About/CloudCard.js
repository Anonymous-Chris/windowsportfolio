import AWSLogo from "../../../assets/skills/aws-original.png"
import DockerLogo from "../../../assets/skills/docker-original.png"
import GithubLogo from "../../../assets/skills/github-original-skill.png"
import GitlabLogo from "../../../assets/skills/gitlab-original.png"
import KubernetesLogo from "../../../assets/skills/kubernetes-original.png"
import TerraformLogo from "../../../assets/skills/terraform-original.png"
import CardItem from "./CardItem"
import Logo from "./Logo"
const CloudCard = () => {
    return (
        <div className="m-1 flex min-w-[50%] mx-auto flex-col justify-start rounded bg-gray-600  bg-opacity-50 p-3 text-left">
            <h1 className="text-3xl font-bold text-green-400 ">Cloud & DevOps</h1>
            <div className="flex flex-wrap">
                <Logo name="AWS" logo={AWSLogo}></Logo>
                <Logo name="Github" logo={GithubLogo}></Logo>
                <Logo name="Gitlab" logo={GitlabLogo}></Logo>
                <Logo name="Docker" logo={DockerLogo}></Logo> 
                <Logo name="Terraform" logo={TerraformLogo}></Logo> 
                <Logo name="Kubernetes" logo={KubernetesLogo}></Logo>
            </div>
            <div className="flex flex-col">
                <CardItem name="Cloud" value="AWS"></CardItem>
                <CardItem name="CI / CD" value="Github, Gitlab"></CardItem>
                <CardItem name="Deployment" value="Docker, Terraform, Kubernetes"></CardItem>
            </div>
        </div>
    )
}

export default CloudCard