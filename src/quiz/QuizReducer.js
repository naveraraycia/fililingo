const quizReducer = (state, action) => {
  switch(action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        quizStart: true
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'SHOW_QUESTIONS':
      return {
        ...state,
        showQuestions: true
      }
    case 'REMOVE_LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default quizReducer