import { createContext, useReducer } from "react";
import quizReducer from "./QuizReducer";

const QuizContext = createContext()

export const QuizProvider = ({children}) => {
  const initialState = {
    quizItems: [],
    loading: false,
    quizStart: false,
    showQuestions: false,
    score: 0,
    progress: 0
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