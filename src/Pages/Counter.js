import { useContext } from "react";
import PageHeader from "../components/UI/PageHeader";
import AppContext from "../store/AppContext";

const Counter = () => {
  const { counter, onIncreaseCounter } = useContext(AppContext);

  return (
    <>
      <PageHeader title="Counter" />

      {/* Counter components */}
      <div className="flex flex-col justify-center items-center text-center p-4 h-5/6">
        <h2
          className="text-9xl text-white font-semibold mb-6"
          style={{
            textShadow: `2px 2px 0 #34d399, 2px -2px 0 #34d399, -2px 2px 0 #34d399, -2px -2px 0 #34d399, 2px 0px 0 #34d399, 0px 2px 0 #34d399, -2px 0px 0 #34d399, 0px -2px 0 #34d399`,
          }}
        >
          {counter}
        </h2>

        <button
          className="py-2 px-6 bg-green-600 text-white text-lg rounded-full shadow-lg hover:shadow-none"
          onClick={onIncreaseCounter}
        >
          + Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
