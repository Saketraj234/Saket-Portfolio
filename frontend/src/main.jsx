import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AchievementsPage from './pages/AchievementsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
