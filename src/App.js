import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <p>
        {count !== 0 && Math.abs(count)}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? " days from today is "
            : " days ago was"}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
