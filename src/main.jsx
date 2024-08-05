import React from 'react'
import ReactDOM from 'react-dom/client'
import  AppRoutes  from './routes/Routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router children={AppRoutes}  />
  </React.StrictMode>,
)
