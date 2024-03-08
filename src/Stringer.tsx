import { useReducer } from "react";


const ACTION = {
    ADD: "add",
    REMOVE: "remove",
}

const stringReducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTION.ADD:
            return { string: state.string + "R"}
            case ACTION.REMOVE:
                return {string: state.string.slice (0, -1)}
    }
}

const Stringer = () => {
    const [state, dispatch] = useReducer(stringReducer, {string: ""})

    return (
        <>
        <div className="compContainer">
        <h1>Stringer</h1>
        <input type="text" value={state.string} />
        <button onClick={() => dispatch({type: ACTION.ADD})}>ADD R</button>
        <button onClick={() => dispatch({type: ACTION.REMOVE})}>REMOVE R</button>
        </div>
        </>
    )
}

export default Stringer