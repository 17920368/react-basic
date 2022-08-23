import { useReducer } from "react";

const initialState = { count: 0 };
function init(initialState) {
  return { count: initialState.count };
}
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 10 };
    case "decrement":
      return { count: state.count - 10 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      >
        {" "}
        Reset{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </div>
  );
}

//types se puede ir a otro js
//reducer, init, initialCount, const [state]... a otro js
