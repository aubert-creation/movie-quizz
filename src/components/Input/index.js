import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import './styles.scss'

function Input(props) {
  const { t } = useTranslation('result')

  return (
    <input
      className='mq-input'
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      type='text'
      placeholder={t('inputPlaceholder')}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Input
