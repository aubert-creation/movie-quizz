import PropTypes from 'prop-types'

import './styles.scss'

function Row(props) {
  return (
    <div className="mq-row">
      {props.children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node
}

export default Row
