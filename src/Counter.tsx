import {useReducer} from "react"

const ACTION = {
    ADD: "add",
    REMOVE: "remove",
}

const countReducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTION.ADD:
            return {count: state.count + 1}
        case ACTION.REMOVE:
            return {count: state.count - 1}
    }
}

function Counter () {
    const [state, dispatch] = useReducer(countReducer, {count: 0})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        //setCount(Number(e.target.value))
    }

    return (
        <>
        <div className="compContainer">
            <h1>Counter</h1>
            <input type="number" value={state.count} onChange={handleChange} />
            <button onClick={() => dispatch({type:ACTION.ADD})}>Add</button>
            <button onClick={() => dispatch({type:ACTION.REMOVE})}>Remove</button>
        </div>
        </>
    )
}

export default Counter