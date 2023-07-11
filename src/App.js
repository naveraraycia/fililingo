import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizContext from "./quiz/QuizContext";
import Welcome from "./layout/Welcome";
import Footer from "./layout/Footer";
import Spinner from "./components/Spinner";
import Countdown from "./components/Countdown";
import Question from "./components/Question";
import NotFound from './pages/NotFound';

function App() {
  const {quizStart, showQuestions, loading, dispatch} = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type: 'SET_LOADING'})
    setTimeout(()=>{
      dispatch({type: 'REMOVE_LOADING'})
    },1400)
  }, [dispatch])

  if(loading){
    return <Spinner />
  } else {
    return (
      <Router>  
        <div className="h-screen py-5 flex flex-col justify-between">
        <Routes>
          <Route path='/' element={
            <>   
              {quizStart === false ? (
                <Welcome />
              ) : (
                showQuestions ? (
                  <Question />
                ) : (
                  <Countdown />
                )
              )}
            </>
          } />

          <Route path='/*' element={<NotFound />} />
        </Routes>
          <Footer />
        </div> 
      </Router>
    );
  }
}

export default App;
