import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
import './styles.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import theme from './themes'

// const DOMAIN = process.env.AUTH_DOMAIN;
// const CLIENTID = process.env.AUTH_CLIENTID;
// const BASE_URL = process.env.REACT_APP_DEPLOYED_REDIRECT_URL;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
