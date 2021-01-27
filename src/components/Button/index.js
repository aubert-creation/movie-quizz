import PropTypes from 'prop-types'

import './styles.scss'

function Button(props) {
  return (
    <button
      className={`mq-button ${props.fullWidth ? 'mq-button-fw' : ''}`}
      style={props.color ? {backgroundColor: props.color} : {}}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
}

export default Button
