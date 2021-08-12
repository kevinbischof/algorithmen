import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/navigation/navigation'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          {/* <Switch> */}
          {/*  <Route path="/" exact component={Home} /> */}
          {/*  <Route path="/algorithms-overview" component={AlgorithmsOverview} /> */}
          {/* </Switch> */}
        </div>
      </Router>
    </>
  )
}

export default App
