import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './componentes/Sidebar/Sidebar';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Profile from './componentes/Profile/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Profile />
  </React.StrictMode>
);

reportWebVitals();
