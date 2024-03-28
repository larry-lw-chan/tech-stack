export default function Buttons({ step, setStep }) {
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }
  return (
    <div className="buttons">
      <Button
        text="Previous"
        onClick={handlePrevious}
        textColor="#ffffff"
        bgColor="#7950f2"
      >
        <span>👈</span> Previous
      </Button>
      <Button
        text="Next"
        onClick={handleNext}
        textColor="#ffffff"
        bgColor="#7950f2"
      >
        Next <span>👉</span>
      </Button>
    </div>
  );
}

function Button({ onClick, textColor, bgColor, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
