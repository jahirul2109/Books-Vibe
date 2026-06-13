import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routers from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router'
import { createContext } from 'react'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'
const router = Routers;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
