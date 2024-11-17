import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailOrPhone && password) {
            navigate('/home');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="/prime-logo.png" alt="Prime Video Logo" className="login-logo-image" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input
                    type="text"
                    placeholder="Email OR Mobile Phone Number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="continue-button">Continue</button>
                <button type="button" className="google-login">
                    <img src="google-icon.png" alt="Google icon" /> Continue with Google
                </button>
                <p className="signup-link">Don't Have An Account? <a href="/signup">Sign In</a></p>
            </form>
        </div>
    );
};

export default LoginPage;
