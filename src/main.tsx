import './i18n'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#f5f2ec' }} />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
