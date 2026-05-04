import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TopNavbar from './components/TopNavbar'
import SecondNavbar from './components/SecondNavbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import CoursesSection from './components/CourseSection'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopNavbar />
    <SecondNavbar />
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <CoursesSection />
  </StrictMode>,
)
