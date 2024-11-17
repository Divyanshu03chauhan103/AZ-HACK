import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './SignUpPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        
        // Redirect to the login page after successful account creation
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <div className="logo">
                <img src="/prime-logo.png" alt="Prime Video Logo" className="logo-image" />
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button type="submit" className="create-account">Create account</button>
               
                <button type="button" className="google-login">
                    <img src="google-icon.png" alt="Google icon" /> Continue with Google
                </button>
                <p className="login-link">Already have an account? <a href="/login">Log In</a></p>
            </form>
        </div>
    );
};

export default SignUpPage;
