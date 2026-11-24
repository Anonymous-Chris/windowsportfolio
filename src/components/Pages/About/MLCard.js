import CardItem from "./CardItem"
import Logo from "./Logo"
import PythonLogo from "../../../assets/skills/python-original.svg";
import PyTorchLogo from "../../../assets/skills/pytorch-original.svg";
import TensorFlowLogo from "../../../assets/skills/tensorflow-original.svg";
import HuggingFaceLogo from "../../../assets/skills/huggingface-original.png";
import ChromaDBLogo from "../../../assets/skills/chromadb-original.png";

const MLCard = () => {
    return (
        <div className="m-1 flex w-full flex-col justify-start bg-gray-600 bg-opacity-50 p-3 text-left rounded">
            <h1 className="text-3xl font-bold text-green-400 ">Machine Learning</h1>
            <div className="flex flex-wrap">
                <Logo name="Python" logo={PythonLogo}></Logo>
                <Logo name="PyTorch" logo={PyTorchLogo}></Logo>
                <Logo name="TensorFlow" logo={TensorFlowLogo}></Logo>
                <Logo name="HuggingFace" logo={HuggingFaceLogo}></Logo>
                <Logo name="ChromaDB" logo={ChromaDBLogo}></Logo>
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
