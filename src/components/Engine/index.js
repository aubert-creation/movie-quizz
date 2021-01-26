import { useState, useEffect } from 'react'
import { useApolloClient } from '@apollo/client'

import Card from 'components/Card'
import Image from 'components/Image'
import Button from 'components/Button'
import LiveScore from 'components/LiveScore'

import { CASTINGS, MOVIES_INCLUDE, MOVIES_EXCLUDE } from 'utils/requests'
import { getRandomInt, getRandomBool } from 'utils/random'

import './engine.scss'

function Engine() {
  const client = useApolloClient()
  const [currentScore, setCurrentScore] = useState(0)
  const [cast, setCast] = useState(null)
  const [movie, setMovie] = useState(null)
  const [expected, setExpected] = useState(getRandomBool())

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
      //TODO: GAME OVER: REDIRECT TO RESULT ROUTE PAGE
      console.log('game over')
    }
  }

  return (
    <div className="mq-container">
      <Card>
        <LiveScore currentScore={currentScore} />
        <h3>Did is actor play in this movie ?</h3>
        <div className="mq-section">
          <Image src={(cast && movie) ? cast.photo.medium : null } />
          <Image src={(cast && movie) ? movie.poster.medium : null} />
        </div>
        <div className="mq-section">
          <Button
            label="Yes"
            onClick={() => performResponse(true)}
            fullWidth={true}
            color='#2aeb49'
          />
          <Button
            label="No"
            onClick={() => performResponse(false)}
            fullWidth={true}
            color='#ff5959'
          />
        </div>
      </Card>
    </div>
  )
}

export default Engine
