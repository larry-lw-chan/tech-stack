import { Dispatch } from "react";
import { Action } from "../interface";

interface RestartButton {
  dispatch: Dispatch<Action>;
}

export default function RestartButton({ dispatch }: RestartButton) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}
