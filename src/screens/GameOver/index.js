import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { getDurationString } from 'utils/time'

import Card from 'components/Card'
import Row from 'components/Row'
import Cell from 'components/Cell'
import Button from 'components/Button'
import Highscore from 'components/Highscore'

import './styles.scss'

function GameOver(props) {
  const { t } = useTranslation('result')
  const { state } = props.location

  return (
    <div className="mq-container">
      <Card>
        <h2>{t('title')}</h2>
        <Row>
          <Cell>{t('timeSpent')}</Cell>
          <Cell>{state ? getDurationString(state.time) : 0}s</Cell>
        </Row>
        <Row>
          <Cell>{t('goodAnswersLabel')}</Cell>
          <Cell>{t('goodAnswers', {count: state ? state.score : 0})}</Cell>
        </Row>
        <Button
          label={t('tryAgain')}
          onClick={() => props.history.push('play')}
        />
        {state &&
          <Highscore
            score={state.score}
            time={state.time}
          />
        }
      </Card>
    </div>
  )
}

export default withRouter(GameOver)
