import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login'
import './Login.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
