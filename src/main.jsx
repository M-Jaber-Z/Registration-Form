import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contect from './Contect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contect/>
  </StrictMode>,
)
