import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailOrPhoneChange = (e) => setEmailOrPhone(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email or Phone:', emailOrPhone, 'Password:', password);
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src="/prime-logo.png" alt="Prime Video Logo" className="logo-image" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input
                    type="text"
                    placeholder="Email OR Mobile Phone Number"
                    value={emailOrPhone}
                    onChange={handleEmailOrPhoneChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button type="submit" className="continue-button">Continue</button>
                <button type="button" className="google-login">
                    <img src="google-icon.png" alt="Google icon" /> Continue with Google
                </button>
                <p className="signup-link">Don't Have An Account? <a href="/Signup">Sign In</a></p>
            </form>
        </div>
    );
};

export default LoginPage;
