import { useContext, useEffect } from "react"
import QuizContext from "../quiz/QuizContext"

function Countdown() {
  const {dispatch} = useContext(QuizContext)
  let counter = 3
  const startCountdown = setInterval(() => {
		if(counter>0){
			counter--
      if(counter === 0){
        clearInterval(startCountdown)
        setTimeout(()=>{
          dispatch({type: 'SHOW_QUESTIONS'})
        },2000)
      }
		}
    document.getElementById('counterElement').style.setProperty('--value', counter)  
    console.log('hello world');
  }, 1500)

  useEffect(()=>{
   
  },[])

  return (
    <div className="h-screen flex flex-col justify-center space-y-5 items-center">
      <h1 className="text-4xl text-secondary-content font-bold">Get ready</h1>
      <span className="block countdown font-mono text-6xl">
       <span id="counterElement" style={{"--value":3}}></span>
      </span>
    </div>
  )
}

export default Countdown