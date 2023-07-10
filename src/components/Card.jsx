function Card({children}) {
  return (
    <div className="card w-96 bg-neutral text-base-content">
      <div className="card-body items-center text-center">
        {children}
      </div>
    </div>
  )
}

export default Card