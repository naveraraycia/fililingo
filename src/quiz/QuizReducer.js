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
    case 'REMOVE_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'SHOW_QUESTIONS':
      return {
        ...state,
        showQuestions: true
      }
    case 'ADD_SCORE':
      return {
        ...state,
        score: action.payload
      }
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: action.payload
      }
    default:
      return state
  }
}

export default quizReducer