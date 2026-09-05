import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import About from '../src/pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
