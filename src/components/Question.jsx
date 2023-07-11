import { useContext, useState } from "react"
import { useIterable } from "use-iterator"
import QuizContext from "../quiz/QuizContext"
import EndQuiz from "../layout/EndQuiz"
import Card from "./Card"

function Question() {
  const {quizItems, score, progress, dispatch} = useContext(QuizContext)
  const result = useIterable(quizItems)
  const [selected, setSelected] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [progressValue, setProgressValue] = useState(progress)
  const [isDisabled, setIsDisabled] = useState(true)
  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const handleSelect = (index, choice) => {
    setSelected(index)
    setAnswer(choice)
    setIsDisabled(false)
  }

  const handleSubmit = () => {
    setIsDisabled(true)
    setSubmitted(true)
    if (answer === result.value.correctAnswer) {
      setCorrect(true)
      const addToScore = score + 1
      dispatch({type: 'ADD_SCORE', payload: addToScore})
    } else {
      setWrong(true)
    }
    
    setTimeout(()=> {
      result.next()
      setSelected(null)
      setWrong(false)
      setCorrect(false)
      setSubmitted(false)
      const updatedProgress = progressValue + 6.67
      dispatch({type: 'UPDATE_PROGRESS', payload: updatedProgress})
      setProgressValue(updatedProgress)
    }, 1800)
  }
  return (
    <div className="px-5 flex flex-col h-screen justify-center items-center">
 
    {result.value !== undefined ? (
      <>
        <Card>
          <h2 className="card-title text-sm font-bold tracking-wide text-neutral-content md:text-lg">Question {result.value.id}</h2>
          <p className="text-xs max-w-md"><span className="font-bold text-neutral-content">Instruction:</span> select the correct English translation for the following Tagalog phrases</p>
          <div className="w-full relative space-y-5">
            {submitted && (
              <div className="absolute top-0 left-0 bottom-0 right-0 h-screen z-20 bg-base bg-opacity-75">
               
              </div>
            )}
            <p className="text-neutral-content text-xl">{result.value.question}</p> 
            <div className="space-y-2 w-full text-sm">
              {result.value.choices.map((choice, index)=>(
                <div key={index} onClick={() => handleSelect(index, choice)} className={`rounded-lg border border-base-content w-full py-4 px-10 duration-200 hover:bg-base-content hover:text-neutral hover:cursor-pointer
                ${selected === index && 'bg-base-content text-neutral'}
                `}>{choice}</div>  
              ))}
            </div> 
            
            {wrong && (
              <div className="w-full text-left space-y-3">
                <p className="text-error font-bold">Incorrect answer</p>
                <p className="text-xs text-neutral-content"><span className="text-success font-bold">Correct Answer:</span> {result.value.correctAnswer}</p>
              </div>
            )}
            
            {correct && (
              <p className="text-success text-left font-bold">Correct answer</p>
            )}

            <progress className="progress progress-info w-56" value={progressValue} max="100"></progress>
            <button onClick={handleSubmit} disabled={isDisabled} className="btn btn-primary btn-block">Next</button>
          </div>
        </Card>
      </>
    ) : (
      <EndQuiz />
    )}
    </div>
  )
}

export default Question