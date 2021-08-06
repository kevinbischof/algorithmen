import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navbar/navigation'
import Home from './components/home/home'
import AlgorithmsOverview from './components/algorithms/algorithms-overview'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/algorithms-overview" component={AlgorithmsOverview} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
