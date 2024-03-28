interface FinishedProps {
  points: number;
  maxtotalPoints: number;
}

export default function FinishedScreen({
  points,
  maxtotalPoints,
}: FinishedProps) {
  const percentage = (points / maxtotalPoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxtotalPoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}
