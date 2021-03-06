import PropTypes from 'prop-types'

import Timer from 'components/Timer'
//import SlideComplete from 'components/SlideComplete'
import Score from 'components/Score'

import './styles.scss'

function LiveScore(props) {
  return (
    <div className="mq-livescore">
      <Timer
        currentTime={props.currentTime}
      />
      {/*
        <SlideComplete
          currentStep={props.currentStep}
          maxSteps={props.maxSteps}
        />
      */}
      <Score
        currentScore={props.currentScore}
      />
    </div>
  )
}

LiveScore.propTypes = {
  currentScore: PropTypes.number,
  currentTime: PropTypes.number
}

export default LiveScore
