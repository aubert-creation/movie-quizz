import PropTypes from 'prop-types'

import './styles.scss'

function Cell(props) {
  return (
    <div className="mq-cell">
      {props.children}
    </div>
  )
}

Cell.propTypes = {
  children: PropTypes.node
}

export default Cell
