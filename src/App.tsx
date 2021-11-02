import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.module.css'
import { MainPage } from 'components/pages'

export const App: React.FunctionComponent = (): JSX.Element => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  )
}
