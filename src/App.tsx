import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import Home from './components/home/home'
import routes from './routes/routes'

function App() {
  return (
    <>
      <Router>
        <div className="App font-sans">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            {routes.map((route) => {
              return <Route key={route.id} path={route.href} component={route.component} />
            })}
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
