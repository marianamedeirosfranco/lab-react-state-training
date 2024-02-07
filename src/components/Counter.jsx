import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter value cannot go below 0.");
    }
  };

  return (
    <div className="Counter">
      <button
        onClick={() => {
          decrementCounter();
        }}
      >
        {" "}
        -{" "}
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
