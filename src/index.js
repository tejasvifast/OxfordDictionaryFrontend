
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './scss/style.scss'

// alert(process.env.NODE_ENV==='development')
export const backendApiUrl= process.env.NODE_ENV==='development' ? 'http://localhost:5000/':'https://oxforddictionary-back.onrender.com/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
