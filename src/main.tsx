import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CoffeProvider from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeProvider>
      <App />
    </CoffeProvider>
  </StrictMode>,
)
