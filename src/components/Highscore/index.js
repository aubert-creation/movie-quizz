import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getDurationString } from 'utils/time'
import { getHighscores, setHighscore } from 'utils/api'

import Row from 'components/Row'
import Cell from 'components/Cell'
import Button from 'components/Button'
import Input from 'components/Input'

import './styles.scss'

function Highscore(props) {
  const { t } = useTranslation('result')
  const [scores, setScores] = useState([])
  const [inputName, setInputName] = useState('')
  const [scoreAdded, setScoreAdded] = useState(false)

  useEffect(() => {
    getHighscores((items) => {
      setScores(items)
    })
  }, [])

  const canAddHighscore = () => {
    if(scoreAdded) return false
    if(scores.length < 5) return true

    const lowestScore = scores.slice(-1).pop()

    if(lowestScore) {
      if(props.score > lowestScore.score) return true
      if(props.score === lowestScore.score && props.time < lowestScore.time) return true
    }

    return false
  }

  const addHighscore = () => {
    setHighscore({
      name: inputName,
      score: props.score,
      time: props.time
    }, (items) => {
      setScores(items)
      setInputName('')
      setScoreAdded(true)
    })
  }

  return (
    <>
      <h3 className='m-t-20'>{t('highscore')}</h3>
      {scores.map((item, i) => (
        <Row key={`highscore-${i}`}>
          <Cell>{item.name}</Cell>
          <Cell>{getDurationString(item.time)}s</Cell>
          <Cell>{t('goodAnswers', {count: item.score})}</Cell>
        </Row>
      ))}
      {canAddHighscore() &&
        <Row className='m-t-20'>
          <Input value={inputName} onChange={setInputName} />
          <Button label={t('add')} onClick={addHighscore} />
        </Row>
      }
    </>
  )
}

Input.propTypes = {
  score: PropTypes.number,
  time: PropTypes.number
}

export default Highscore
