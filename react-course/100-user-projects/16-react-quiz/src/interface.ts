interface QuizState {
  questions: Question[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  secondsRemaining: number;
}

interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface Action {
  type:
    | "dataReceived"
    | "dataFailed"
    | "startQuiz"
    | "newAnswer"
    | "nextQuestion"
    | "finish"
    | "restart"
    | "tick";
  payload?: any;
}

export type { QuizState, Question, Action };
