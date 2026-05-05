import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AdmissionPopup from './components/AdmissionPopup'
import TopNavbar from './components/TopNavbar'
import SecondNavbar from './components/SecondNavbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import CoursesSection from './components/CourseSection'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Facilities from './components/Facilities'
import Admission from './components/Admission'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdmissionPopup />
    <TopNavbar />
    <SecondNavbar />
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <CoursesSection />
    <WhyChooseUs />
    <Testimonials />
    <Facilities />
    <Admission />
    <Footer />
  </StrictMode>,
)
