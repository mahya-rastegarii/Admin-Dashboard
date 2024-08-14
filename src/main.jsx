import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/app/app-context.jsx'
import { ThemeProvider } from './context/theme/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
    <App />
    </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
)
