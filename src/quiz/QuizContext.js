import { createContext, useReducer } from "react";
import quizReducer from "./QuizReducer";
import questions from "../quizItems/questions";

const QuizContext = createContext()

export const QuizProvider = ({children}) => {
  const initialState = {
    quizItems: questions,
    loading: false,
    quizStart: false,
    showQuestions: false,
    selectedAnswer: '',
    score: 0,
    progress: 6.67
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)

  return <QuizContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </QuizContext.Provider>
}

export default QuizContext