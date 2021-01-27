import PropTypes from 'prop-types'

import './styles.scss'

function SlideComplete(props) {
  return (
    <div className="mq-slideComplete">
      <div
        className="mq-slideComplete-progress"
        style={{width: `${props.currentStep / props.maxSteps * 100}%`}}
      >
      </div>
    </div>
  )
}

SlideComplete.propTypes = {
  currentStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
}

export default SlideComplete
