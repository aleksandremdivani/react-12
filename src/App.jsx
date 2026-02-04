import { useReducer } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { color: "red" };
    case "green":
      return { color: "green" };
    case "blue":
      return { color: "blue" };
    case "reset":
      return intialState;  
    default:
      return state;
  }
};

const intialState = { color: "gray" };

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <main className="flex-col flex gap-3 h-dvh w-full justify-center items-center">
      <ColorBox color={state.color} />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "red" })}
          className="border w-[150px] rounded-md h-[50px] bg-red-500 text-white text-[20px]"
        >
          Red
        </button>
        <button
          onClick={() => dispatch({ type: "blue" })}
          className="border w-[150px] rounded-md h-[50px] bg-blue-700 text-white text-[20px]"
        >
          Blue
        </button>
        <button
          onClick={() => dispatch({ type: "green" })}
          className="border w-[150px] rounded-md h-[50px] bg-green-500 text-white text-[20px]"
        >
          Green
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="border w-[150px] rounded-md h-[50px] bg-gray-400 text-white text-[20px]"
        >
          Reset
        </button>
      </div>
    </main>
  );
}

export default App;
