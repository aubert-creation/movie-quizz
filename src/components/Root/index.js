import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from 'components/Home'
import Engine from 'components/Engine'

function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <Engine />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default Root
