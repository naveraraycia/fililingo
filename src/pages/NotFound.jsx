import { useNavigate } from "react-router-dom"
function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="h-screen px-5 flex flex-col text-center justify-center items-center ">
      <div className="space-y-5">
        <h1 className="text-neutral-content font-extrabold text-6xl md:text-7xl">Oops...</h1>
        <p className="max-w-lg md:text-lg">The page you're looking for does not seem to exist in this space</p>
        <button onClick={()=> navigate('/')} className="btn btn-info">Take me back</button>
      </div>
    </div>
  )
}

export default NotFound