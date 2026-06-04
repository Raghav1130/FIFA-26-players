import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TeamPage from './pages/TeamPage'
import SiteFooter from './components/SiteFooter'
import CountdownTimer from './components/CountdownTimer'

const Root = () => (
  <BrowserRouter>
    <CountdownTimer />
    <SiteFooter />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/team/:teamId" element={<TeamPage />} />
    </Routes>
  </BrowserRouter>
)

export default Root
