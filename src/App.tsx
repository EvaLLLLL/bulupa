import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Title className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Title>
    </div>
  )
}

export default App

const Title = styled.div`
  color: pink;
`
