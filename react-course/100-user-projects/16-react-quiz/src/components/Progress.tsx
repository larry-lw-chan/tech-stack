import ProgressBar from "./ProgressBar";

interface ProgressProps {
  index: number;
  numQuestions: number;
  points: number;
  totalPoints: number;
}

export default function Progress({
  index,
  numQuestions,
  points,
  totalPoints,
}: ProgressProps) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
