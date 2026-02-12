import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NoahLogo from "./assets/noah-photo.png";
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>eNVy Creations LLC</h1>
      <div>Coming Soon!</div>
      <div>
        <img src={NoahLogo} alt="Logo" width={200} />
      </div>
    </>
  )
}

export default App
