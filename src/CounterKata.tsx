import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  MULTIPLY: "multiply",
  RESET: "reset",
  ADDTEN: "addten",
  HALVE: "halve",
};

type State = {count: number}
type Action = {type: string; payload?: number}

const countTwoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.MULTIPLY:
      return { count: state.count * 2 };
    case ACTION.RESET:
      return { count: state.count === 0 };
    case ACTION.ADDTEN:
      return { count: state.count + action.payload };
    case ACTION.HALVE:
      return { count: state.count / 2 };
      default:
        return state
  }
};

const CounterKata = () => {
  const [state, dispatch] = useReducer(countTwoReducer, { count: 0 });
  return (
    <>
      <div className="compContainer">
        <h1>Counter Kata</h1>
        <input type="number" value={state.count} />
        <button onClick={() => dispatch({ type: ACTION.ADD, payload: 1 })}>ADD</button>
        <button onClick={() => dispatch({ type: ACTION.REMOVE, payload: -1 })}>
          REMOVE
        </button>
        <button onClick={() => dispatch({ type: ACTION.MULTIPLY })}>
          Multiply
        </button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
        <button onClick={() => dispatch({ type: ACTION.ADDTEN, payload: 10 })}>+ 10</button>
        <button onClick={() => dispatch({ type: ACTION.HALVE })}>
          Halvera
        </button>
      </div>
    </>
  );
};

export default CounterKata;
