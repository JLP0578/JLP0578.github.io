import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalProvider } from './context/GlobalState'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './assets/styles/reset.css'
import './assets/styles/editable.css'
import './assets/styles/pages/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
