import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import GlobalCss from './styles/global-css'
import ResetCss from './styles/reset-css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetCss />
    <GlobalCss />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
