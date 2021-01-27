import { useTranslation } from 'react-i18next'

import Row from 'components/Row'
import Cell from 'components/Cell'
import Button from 'components/Button'

import './styles.scss'

function Highscore(props) {
  const { t } = useTranslation('result')

  return (
    <div className="mq-container">
      <h3>{t('highscore')}</h3>
    </div>
  )
}

export default Highscore
