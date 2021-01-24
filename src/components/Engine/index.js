import { useState } from 'react'

import Card from 'components/Card'
import Image from 'components/Image'
import Button from 'components/Button'
import LiveScore from 'components/LiveScore'

import './engine.scss'

function Engine() {
  const [currentAnswer, setCurrentAnswer] = useState(0)

  const bdd = [{
    cast: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Christophe_Lambert_et_Jean_Dujardin_%28Cropped%29.jpg',
    movie: 'https://fr.web.img5.acsta.net/pictures/20/09/10/18/05/4458149.jpg',
    result: true
  },
  {
    cast: 'https://business-cool.com/wp-content/uploads/2019/08/Scarlett_Johansson_by_Gage_Skidmore_2_cropped.jpg',
    movie: 'https://fr.web.img6.acsta.net/medias/nmedia/00/02/54/30/affiche.jpg',
    result: false
  },
  {
    cast: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Harrison_Ford_by_Gage_Skidmore_2.jpg',
    movie: 'https://img.over-blog-kiwi.com/1/88/59/62/20191211/ob_0d27f0_5.jpg',
    result: true
  }]

  return (
    <div className="mq-container">
      <Card>
        <LiveScore
          currentStep={currentAnswer}
          currentScore={2}
        />
        <h3>Did is actor play in this movie ?</h3>
        <div className="mq-section">
          <Image src={bdd[currentAnswer].cast} />
          <Image src={bdd[currentAnswer].movie} />
        </div>
        <div className="mq-section">
          <Button
            label="Yes"
            onClick={() => setCurrentAnswer(currentAnswer+1)}
            fullWidth={true}
            color='#2aeb49'
          />
          <Button
            label="No"
            onClick={() => setCurrentAnswer(currentAnswer+1)}
            fullWidth={true}
            color='#ff5959'
          />
        </div>
      </Card>
    </div>
  )
}

export default Engine
