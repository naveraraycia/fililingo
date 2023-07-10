import QuizContext from "./quiz/QuizContext";
import {useContext, useEffect} from 'react'
import Welcome from "./layout/Welcome";
import Footer from "./layout/Footer";
import Spinner from "./components/Spinner";
import Countdown from "./components/Countdown";

function App() {
  const {quizStart, showQuestions, loading, dispatch} = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type: 'SET_LOADING'})
    setTimeout(()=>{
      dispatch({type: 'REMOVE_LOADING'})
    },1400)
  
  }, [])

  if(loading){
    return <Spinner />
  } else {
    return (
      <>
        <div className="h-screen flex flex-col justify-between">
          {quizStart === false ? (
            <Welcome />
          ) : (
            showQuestions ? (<h3>Questions!</h3>) : (
              <Countdown />
            )
         

          // @todo => create the quiz question item component
          )}
          <Footer />
        </div> 
      </>
    );
  }
}

export default App;
