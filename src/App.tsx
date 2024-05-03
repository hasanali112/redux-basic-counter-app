import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const state = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-50 p-10 gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-yellow-500 text-xl text-white"
        >
          Increment By Value
        </button>
        <h1 className="text-3xl mx-10">{state}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl text-white"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;
