import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import Projects from '../src/pages/Projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
)
