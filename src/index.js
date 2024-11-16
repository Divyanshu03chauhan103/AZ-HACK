// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
