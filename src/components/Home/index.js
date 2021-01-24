import { withRouter } from "react-router-dom"

import Card from 'components/Card'
import Button from 'components/Button'

import './home.scss'

function Home(props) {
  return (
    <div className="mq-container">
      <Card>
        <h1>Ready to play ?</h1>
        <p>Be the best in finding the perfect pairing between actors and movies.</p>
        <p>Press Play and let's have some fun!</p>
        <Button
          label="Press play and let's go"
          onClick={() => props.history.push('play')}
        />
      </Card>
    </div>
  );
}

export default withRouter(Home)
