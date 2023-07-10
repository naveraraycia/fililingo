import {useContext} from 'react'
import QuizContext from '../quiz/QuizContext'

function Welcome() {
  const {dispatch} = useContext(QuizContext)
  return (
    <div className="px-5 h-screen flex flex-col justify-center items-center space-y-5 text-center">
      <div>
        <div className="text-4xl font-extrabold text-secondary-content">Welcome to</div>
        <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#367051] to-[#E3BC52] leading-snug">FiliLingo</div>

      </div>
      <p className="text-lg max-w-lg">Ready to take on the ultimate Tagalog challenge? Put your skills to test with this quiz and discover if you're all set to impress with your Tagalog vocab!</p>

      <button onClick={()=> dispatch({type: 'START_QUIZ'})} className="btn btn-primary px-10">start quiz</button>
    </div>
  )
}

export default Welcome