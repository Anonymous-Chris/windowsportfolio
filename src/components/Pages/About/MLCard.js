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
import PythonLogo from "../../../assets/skills/python-original.svg";
import PyTorchLogo from "../../../assets/skills/pytorch-original.svg";
import TensorFlowLogo from "../../../assets/skills/tensorflow-original.svg";
import HuggingFaceLogo from "../../../assets/skills/huggingface-original.png";
// import LoraLogo from "../../../assets/skills/lora-original.svg";
// import BertLogo from "../../../assets/skills/bert-original.svg";
// import ChromaDBLogo from "../../../assets/skills/chromadb-original.svg";
// import BERTScoreLogo from "../../../assets/skills/bertscore-original.svg";
// import NERLogo from "../../../assets/skills/ner-original.svg";
// import EmbeddingsLogo from "../../../assets/skills/embeddings-original.svg";

const MLCard = () => {
    return (
        <div className="m-1 flex w-full flex-col justify-start bg-gray-600 bg-opacity-50 p-3 text-left rounded">
            <h1 className="text-3xl font-bold text-green-400 ">Machine Learning</h1>
            <div className="flex flex-wrap">
                <Logo name="Python" logo={PythonLogo}></Logo>
                <Logo name="PyTorch" logo={PyTorchLogo}></Logo>
                <Logo name="TensorFlow" logo={TensorFlowLogo}></Logo>
                <Logo name="HuggingFace" logo={HuggingFaceLogo}></Logo>

                {/* <Logo name="Transformers" logo={TransformersLogo}></Logo>
                <Logo name="QLoRA" logo={QLoRALogo}></Logo>
                <Logo name="LoRA" logo={LoRALogo}></Logo>
                <Logo name="PEFT" logo={PEFTLogo}></Logo>
                <Logo name="BERT" logo={BertLogo}></Logo>
                <Logo name="BERTScore" logo={BERTScoreLogo}></Logo>
                <Logo name="Biomedical NER" logo={NERLogo}></Logo>
                <Logo name="Embeddings" logo={EmbeddingsLogo}></Logo>
                <Logo name="ChromaDB" logo={ChromaDBLogo}></Logo> */}
            </div>
            <div className="flex flex-col">
                <CardItem name="Languages" value="Python"></CardItem>
                <CardItem name="Deep Learning" value="PyTorch, TensorFlow/Keras"></CardItem>
                <CardItem name="LLM & NLP" value="Transformers, LLMs, NLP, RAG, Prompt Engineering"></CardItem>
                <CardItem name="Fine-Tuning" value="QLoRA, LoRA, PEFT, 4-bit Quantization"></CardItem>
                <CardItem name="ML Tools & Libraries" value="BERT, BERTScore, Biomedical NER, Embeddings, ChromaDB"></CardItem>
                <CardItem name="Evaluation" value="Lexical, Semantic, Statistical Analysis"></CardItem>
            </div>
        </div>
    )
}

export default MLCard
