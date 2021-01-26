import PropTypes from 'prop-types'
import './image.scss'

function Button(props) {
  return (
    <div className='mq-image-container'>
      <div style={{backgroundImage: `url(${props.src})`}} className='mq-image'></div>
    </div>
  )
}

Button.propTypes = {
  src: PropTypes.string
}

export default Button
