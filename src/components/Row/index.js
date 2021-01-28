import PropTypes from 'prop-types'

import './styles.scss'

function Row(props) {
  return (
    <div className={`mq-row ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Row
