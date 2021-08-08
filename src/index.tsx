import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { About } from './About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/about" exact component={About} />
  </Router>,
  document.getElementById('root')
)
