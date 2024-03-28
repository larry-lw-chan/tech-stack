import { Dispatch } from "react";
import { useEffect } from "react";
import { Action } from "../interface";

interface TimerProps {
  dispatch: Dispatch<Action>;
  secondsRemaining: number;
}

export default function Timer({ secondsRemaining, dispatch }: TimerProps) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(
    function () {
      const interval = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
