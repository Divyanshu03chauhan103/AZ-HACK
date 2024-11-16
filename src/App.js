import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
