import PropTypes from 'prop-types'

function TextGroup({subText, mainText}) {
  return (
    <div className='text-center space-y-[-15px]'>
      <div className=" text-3xl  font-extrabold text-secondary-content md:text-4xl ">{subText}</div>
      <div className="text-7xl leading-[110px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#367051] to-[#E3BC52] md:leading-snug md:text-8xl">{mainText}</div>
    </div>
  )
}

TextGroup.propTypes = {
  subText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired
}

export default TextGroup