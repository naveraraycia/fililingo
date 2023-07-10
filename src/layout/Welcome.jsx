import { useContext } from 'react'
import QuizContext from '../quiz/QuizContext'
import TextGroup from '../components/TextGroup'

function Welcome() {
  const {dispatch} = useContext(QuizContext)
  return (
    <div className="px-5 h-screen flex flex-col justify-center items-center space-y-5 text-center">
      <TextGroup subText={'Welcome to'} mainText={'FiliLingo'} />
      <p className="text-md max-w-sm md:max-w-lg md:text-lg">Ready to take on some Tagalog challenge? Put your skills to test with this quiz and discover if you know the basics!</p>

      <button onClick={()=> dispatch({type: 'START_QUIZ'})} className="btn btn-primary px-10">start quiz</button>
    </div>
  )
}

export default Welcome