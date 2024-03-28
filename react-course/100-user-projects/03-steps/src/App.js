import React from "react";

import Steps from "./components/Steps";
import IsOpenButton from "./components/IsOpenButton";
import Buttons from "./components/Buttons";
import StepMessage from "./components/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(true);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <IsOpenButton onClick={handleIsOpen} />
      {isOpen && (
        <div className="steps">
          <Steps step={step} />
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <Buttons step={step} setStep={setStep} />
        </div>
      )}
    </div>
  );
}
