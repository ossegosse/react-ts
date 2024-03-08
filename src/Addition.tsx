import { useState } from "react"



const Addition = () => {
const [number1, setNumber1] = useState("")
const [number2, setNumber2] = useState("")
const [sum, setSum] = useState(0)

const handleAddition = () => {
    const result = parseFloat(number1) + parseFloat(number2)
    setSum(result)
}

    return (
    <>
    <input type="number"
    value={number1}
    onChange={(e) => setNumber1(e.target.value)}
    />
    <input type="number"
    value={number2}
    onChange={(e) => setNumber2(e.target.value)}
    />
    <button onClick={handleAddition}>Add</button>
    <p>Summa: {sum}</p>
    </>
    )
}

export default Addition