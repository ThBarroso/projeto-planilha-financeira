import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './componentes/Sidebar/Sidebar';
import reportWebVitals from './reportWebVitals';
import Profile from './componentes/Profile/index.js';
import {createGlobalStyle} from 'styled-components';

const GLobalStyle= createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
 li{
  list-style: none;
  text-decoration: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GLobalStyle />
    <Sidebar />
    <Profile />
  </React.StrictMode>
);

reportWebVitals();
