import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { ExperienceDetailPage } from './pages/ExperienceDetailPage'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<PortfolioPage />} />
        <Route path="experiencia/:slug" element={<ExperienceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
