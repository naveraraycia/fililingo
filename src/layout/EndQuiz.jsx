import { useContext } from "react"
import QuizContext from "../quiz/QuizContext"
import TextGroup from "../components/TextGroup"

function EndQuiz() {
  const {score} = useContext(QuizContext)
  let mainScore = String(score)
  mainScore = `${mainScore}/15`
  return (
    <div className="space-y-5 text-center max-w-lg">
      <TextGroup subText={'You got'} mainText={mainScore} />
      {score === 0 ? (
        <h3 className="text-neutral-content">Oh no! Looks like you need a lot of practice!</h3>
      ) : score > 0 && score <= 5 ? (
        <h3 className="text-neutral-content">You know some stuff but not quite enough. Practice a little bit more!</h3>
      ) : score >= 6 && score <= 9 ? (
        <h3 className="text-neutral-content">You're getting there but still not quite. Study some more Tagalog basics! </h3>
      ) : score >= 10 && score < 15 ? (
        <h3 className="text-neutral-content">Wow! You're pretty good at Tagalog basics! You're almost there!</h3>
      ) : score === 15 ? (
        <h3 className="text-neutral-content">Good job on getting a perfect score! Looks like you're ready to move to the next stages of the Tagalog language. Ang galing mo!</h3>
      ) : null}

      <button onClick={()=> window.location.reload()} className="btn btn-info px-24">Replay</button>
    </div>
  )
}

export default EndQuiz