import { useState, useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Card from 'components/Card'
import Image from 'components/Image'
import Button from 'components/Button'
import LiveScore from 'components/LiveScore'

import { CASTINGS, MOVIES_INCLUDE, MOVIES_EXCLUDE } from 'utils/requests'
import { getRandomInt, getRandomBool } from 'utils/random'

import './styles.scss'

function Engine(props) {
  const { t } = useTranslation('game')
  const client = useApolloClient()
  const [currentScore, setCurrentScore] = useState(0)
  const [cast, setCast] = useState(null)
  const [movie, setMovie] = useState(null)
  const [expected, setExpected] = useState(getRandomBool())
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  useEffect(() => {
    getCasting()
  }, [currentScore])

  const getCasting = () => {
    client.query({
      query: CASTINGS,
      variables: { page_num: getRandomInt(1, 5)}
    }).then(json => {
      let cast = null
      if(json.data && json.data.trendingPeople && json.data.trendingPeople.length > 0) {
        cast = json.data.trendingPeople[getRandomInt(0, json.data.trendingPeople.length)]

        if(cast) {
          getMovie(cast)
        }
      }
    })
  }

  const getMovie = (cast) => {
    client.query({
      query: expected ? MOVIES_INCLUDE : MOVIES_EXCLUDE,
      variables: { castId: cast.id }
    }).then(json => {
      let movie = null
      if(json.data && json.data.discoverMovies && json.data.discoverMovies.length > 0) {
        movie = json.data.discoverMovies[getRandomInt(0, json.data.discoverMovies.length)]
      }

      if(movie) {
        setCast(cast)
        setMovie(movie)
      }
    })
  }

  const performResponse = (res) => {
    if(res === expected) {
      setMovie(null)
      setCast(null)
      setCurrentScore(currentScore+1)
      setExpected(getRandomBool())
    } else {
      props.history.push({
        pathname: 'gameover',
        state: {
          score: currentScore,
          time: seconds
        }
      })
    }
  }

  return (
    <div className="mq-container">
      <Card>
        <LiveScore currentScore={currentScore} currentTime={seconds} />
        <h3>{t('title')}</h3>
        <div className="mq-section">
          <Image src={(cast && movie) ? cast.photo.medium : null } />
          <Image src={(cast && movie) ? movie.poster.medium : null} />
        </div>
        <div className="mq-section">
          <Button
            label={t('yes')}
            onClick={() => performResponse(true)}
            fullWidth={true}
            color='#2aeb49'
          />
          <Button
            label={t('no')}
            onClick={() => performResponse(false)}
            fullWidth={true}
            color='#ff5959'
          />
        </div>
      </Card>
    </div>
  )
}

export default withRouter(Engine)
