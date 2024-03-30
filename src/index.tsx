import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <App title={document.title}/>
    <h1 className='text-xl bg-red-500'>index.tsx</h1>
  </React.StrictMode>,
)
