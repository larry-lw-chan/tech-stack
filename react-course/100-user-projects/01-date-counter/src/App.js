import "./App.css";
import React from "react";

function App() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  function handleCountMinus() {
    if (count > 0) setCount(count - 1);
  }

  function handleCountPlus() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function getDate() {
    let date = new Date();

    // Set Step and Count
    if (count > 0 && step > 0) {
      let today = date.getDate();
      let days = count * step;
      date.setDate(today + days);
      return `${days} days from today is ${date.toDateString()}`;
    }

    return `Today is ${date.toDateString()}`;
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <div className="step-counter">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <strong className="count"> {step} </strong>
      </div>
      <div className="count-counter">
        <button className="minus" onClick={handleCountMinus}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="plus" onClick={handleCountPlus}>
          +
        </button>
      </div>
      <div className="result">
        <strong>{getDate()}</strong>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
