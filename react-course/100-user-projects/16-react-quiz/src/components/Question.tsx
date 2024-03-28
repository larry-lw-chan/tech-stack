import { Dispatch } from "react";
import { Question, Action } from "../interface";

import Options from "./Options";

interface QuestionProps {
  question: Question;
  answer: number | null;
  dispatch: Dispatch<Action>;
}

function QuestionComp({ question, answer, dispatch }: QuestionProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default QuestionComp;
