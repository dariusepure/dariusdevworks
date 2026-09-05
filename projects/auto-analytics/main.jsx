import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import AutoAnalytics from '../../src/pages/AutoAnalytics'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutoAnalytics />
  </StrictMode>,
)
