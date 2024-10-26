import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 

'react-router-dom'
import ErrorPage from './ERROR.jsx'
import Introduction from './pages/Introduction/Introduction.jsx'
import NagarPalikaParishad from './pages/NagarPalikaParishad/NagarPalikaParishad.jsx'
import AnnapurnaRasoi from './pages/AnnapurnaRasoi/AnnapurnaRasoi.jsx'
import Gaushala from './pages/Gaushala/Gaushala.jsx'
import Gola from './pages/Gola/Gola.jsx'
import EightResolutionSteps from './components/Resolution/EightResolutionSteps.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/introduction',
    element: <Introduction />,
    errorElement: <ErrorPage />
  },
  {
    path: '/nagarpalika-gola',
    element: <NagarPalikaParishad />,
    errorElement: <ErrorPage />
  },
  {
    path: '/annapurna-rasoi',
    element: <AnnapurnaRasoi />,
    errorElement: <ErrorPage />
  },
  {
    path: '/gaushala',
    element: <Gaushala />,
    errorElement: <ErrorPage />
  },
  {
    path: '/golagokarnath',
    element: <Gola />,
    errorElement: <ErrorPage />
  },
  {
    path: '/eight-resolution',
    element: <EightResolutionSteps />,
    errorElement: <ErrorPage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} /> 
   </StrictMode>,
) 
