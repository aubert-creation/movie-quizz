import PropTypes from 'prop-types'
import { MdCheckCircle } from 'react-icons/md'

import './score.scss'

function Score(props) {

  return (
    <div className='mq-score'>
      <MdCheckCircle color='#2aeb49' />
      {props.currentScore}
    </div>
  )
}

Score.propTypes = {
  currentScore: PropTypes.number.isRequired
}

export default Score
