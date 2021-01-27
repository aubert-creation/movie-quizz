import PropTypes from 'prop-types'

import { getDurationString } from 'utils/time'

import './styles.scss'

function Timer(props) {
  return (
    <div className="mq-timer">
      {getDurationString(props.currentTime)}
    </div>
  )
}

Timer.propTypes = {
  currentTime: PropTypes.number
}

export default Timer
