import { useReducer } from "react";
import Button from "../components/Button";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "Decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  return (
    <div>
      {state.counter}

      <Button onClick={() => dispatch({ type: "Increment" })}>Increment</Button>
      <Button onClick={() => dispatch({ type: "Decrement" })}>Decrement</Button>
    </div>
  );
};

export default CounterPage;
