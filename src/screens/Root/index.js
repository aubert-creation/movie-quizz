import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from 'screens/Home'
import Engine from 'screens/Engine'
import GameOver from 'screens/GameOver'

function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <Engine />
        </Route>
        <Route path="/gameover">
          <GameOver />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Root
