import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogs/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App
