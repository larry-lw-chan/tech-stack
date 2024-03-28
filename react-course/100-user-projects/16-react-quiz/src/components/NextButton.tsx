import { Dispatch } from "react";
import { Action } from "../interface";

interface NextButtonProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
  numQuestions: number;
  index: number;
}

export default function NextButton({
  dispatch,
  answer,
  numQuestions,
  index,
}: NextButtonProps) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
