import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './components/layout/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
)
