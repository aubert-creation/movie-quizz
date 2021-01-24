import React, { useState, useEffect } from 'react'

import './timer.scss'

function Timer(props) {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  return (
    <div className="mq-timer">
      {seconds}s
    </div>
  )
}

export default Timer
