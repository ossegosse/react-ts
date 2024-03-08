import { useState } from "react"


const ChangeText = () => {
    const [inputText, setInputText] = useState ("")
    const [outputText, setOutputText] = useState ("")

    const copyText = () => {
        setOutputText(inputText)
    }

    return (
    <>
    <input type="text"
    value={inputText}
    onChange={(e) => setInputText(e.target.value)} />
    <button onClick={copyText}>Copy</button>
    <p>{outputText}</p>
    </>
    )
}

export default ChangeText

