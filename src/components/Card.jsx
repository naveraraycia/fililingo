import PropTypes from 'prop-types'

function Card({children}) {
  return (
    <div className="card w-96 bg-neutral text-base-content">
      <div className="card-body items-center text-center">
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card