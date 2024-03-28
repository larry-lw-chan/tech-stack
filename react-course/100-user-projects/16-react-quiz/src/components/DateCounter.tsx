import { useReducer } from "react";

interface AppState {
  count: number;
  step: number;
}

type AppActions = {
  type: "inc" | "dec" | "reset" | "defineCount" | "defineStep";
  payload?: number;
};

function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + action.payload!,
      };
    case "dec":
      return {
        ...state,
        count: state.count - action.payload!,
      };
    case "reset":
      return {
        count: 0,
        step: 1,
      };
    case "defineCount":
      return {
        ...state,
        count: action.payload!,
      };

    case "defineStep":
      return {
        ...state,
        step: action.payload!,
      };
  }
}

function DateCounter() {
  const initialState: AppState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "dec", payload: state.step });
  };

  const inc = function () {
    dispatch({ type: "inc", payload: state.step });
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "defineCount",
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "defineStep",
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
