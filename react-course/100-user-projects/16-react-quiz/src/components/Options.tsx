import { Question, Action } from "../interface";

interface OptionProps {
  answer: number | null;
  question: Question;
  dispatch: React.Dispatch<Action>;
}

export default function Options({ question, answer, dispatch }: OptionProps) {
  const hasAnswered = answer !== null;

  function handleClick(index: number) {
    console.log("clicked");
    dispatch({ type: "newAnswer", payload: index });
  }

  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => handleClick(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
