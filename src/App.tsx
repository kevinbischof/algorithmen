import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import Home from './components/home/home'
import AlgorithmsOverview from './components/algorithms/algorithms-overview'

function App() {
  return (
    <>
      <Router>
        <div className="App font-sans">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/algorithms" component={AlgorithmsOverview} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
