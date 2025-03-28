import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './componentes/Sidebar/Sidebar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>
);

reportWebVitals();
