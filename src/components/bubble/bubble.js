import bubble from "./bubble.module.css"

export default function Bubble(){
    return (
        <div className={bubble.container}>
            <span className={bubble.bubble}></span>
        </div>
    );
}