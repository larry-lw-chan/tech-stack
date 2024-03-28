import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorComp from "./components/Error";
import StartScreen from "./components/StartScreen";
import QuestionComp from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import RestartButton from "./components/RestartButton";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

import { QuizState, Action } from "./interface";

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload!, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "newAnswer": {
      const question = state.questions[state.index];
      const isCorrectAnswer = action.payload === question.correctOption;
      const points = isCorrectAnswer
        ? state.points + question.points
        : state.points;
      return {
        ...state,
        answer: action.payload!,
        points: points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: 300,
      };
    case "tick": {
      const status = state.secondsRemaining <= 0 ? "finished" : "active";
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: status,
      };
    }
    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  const initialState: QuizState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: 300,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, answer, status, index, points, secondsRemaining } = state;
  const numQuestions = state.questions.length;
  const totalPoints = state.questions.reduce(
    (acc, curr) => acc + curr.points,
    0
  );

  useEffect(function () {
    async function fetchData() {
      try {
        const result = await fetch("http://localhost:8000/questions");
        const data = await result.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorComp />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              totalPoints={totalPoints}
            />
            <QuestionComp
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishedScreen points={points} maxtotalPoints={totalPoints} />
            <RestartButton dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
