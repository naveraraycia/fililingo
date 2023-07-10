function Spinner() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-bold text-secondary-content text-3xl">FiliLingo</div>
      <span className="loading loading-infinity text-warning loading-lg scale-150"></span>
    </div>
  )
}

export default Spinner