import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import { Layout } from './components/Layout'
import { Routes } from './router'

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
