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
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
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
