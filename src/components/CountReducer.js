import { useReducer } from "react";

const initialCount = { count: 100 };
//types se puede ir a otro js
//reducer, init, initialCount, const [state]... a otro js
function init(initialCount) {
  return { count: initialCount }; //opcional
}
const TYPES = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 10 };
    case "decrement":
      return { count: state.count - 10 };
    case "reset":
      return { count: initialCount.count };
    default:
      return { count: state.count };
  }
}
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count {state.count}</h1>
      <button onClick={() => dispatch({ type: TYPES.increment })}> + </button>
      <button
        onClick={() => dispatch({ type: TYPES.reset, payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: TYPES.decrement })}> - </button>
    </div>
  );
}
