import { Dispatch } from "react";
import { Question } from "../interface";

interface Action {
  type: "dataReceived" | "dataFailed" | "startQuiz";
  payload?: Question[];
}

interface StartProps {
  numQuestions: number;
  dispatch: Dispatch<Action>;
}

function StartScreen({ numQuestions, dispatch }: StartProps) {
  function handleClick() {
    dispatch({ type: "startQuiz" });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

export default StartScreen;
