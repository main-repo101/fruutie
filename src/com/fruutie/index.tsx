import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '/src/resource/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title={document.title}/>
  </React.StrictMode>,
)
