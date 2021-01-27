import PropTypes from 'prop-types'

import './styles.scss'

function Card(props) {
  return (
    <div className="mq-card">
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any
}

export default Card
