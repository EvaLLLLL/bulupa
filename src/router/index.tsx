import React from 'react'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Router>
  )
}
