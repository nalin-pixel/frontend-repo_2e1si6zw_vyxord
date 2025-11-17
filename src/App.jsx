import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Missions from './pages/Missions'
import Sermons from './pages/Sermons'
import Connect from './pages/Connect'
import Give from './pages/Give'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/give" element={<Give />} />
    </Routes>
  )
}

export default App
