import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import './HomePage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const HomePage = () => {
    const [dbStatus, setDbStatus] = useState('');  // State for DB status

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    const languages = [
        { name: 'ENGLISH', imgSrc: 'https://via.placeholder.com/150x200', color: 'english' },
        { name: 'हिंदी', imgSrc: 'https://via.placeholder.com/150x200', color: 'hindi' },
        { name: 'తెలుగు', imgSrc: 'https://via.placeholder.com/150x200', color: 'telugu' },
        { name: 'தமிழ்', imgSrc: 'https://via.placeholder.com/150x200', color: 'tamil' },
    ];

    useEffect(() => {
        // Make the API call to check database connection
        axios.get('http://localhost:3001/test-db')
            .then((response) => {
                setDbStatus(response.data);  // Update state with response data
            })
            .catch((error) => {
                console.error('Error connecting to the backend:', error);
                setDbStatus('Failed to connect to the database');
            });
    }, []);  // Empty dependency array means this will run once when the component mounts

    return (
        <div className="home-page">
            <Navbar />
            <h1 className="welcome-text">Welcome to <span className="highlight">prime</span> video</h1>

            {/* Display the database connection status */}
            <div className="db-status">
                <p>Database Connection Status: {dbStatus}</p>
            </div>

            <section className="carousel-section">
                <h2>Continue Watching</h2>
                <Slider {...settings} className="carousel">
                    {Array(5).fill(null).map((_, index) => (
                        <div key={index}>
                            <img 
                                src={`https://via.placeholder.com/200x300?text=Movie+${index + 1}`} 
                                alt={`Movie ${index + 1}`} 
                            />
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="language-section">
                <h2>Watch in your language</h2>
                <div className="language-options">
                    {languages.map((language, index) => (
                        <div className={`language-card ${language.color}`} key={index}>
                            <img src={language.imgSrc} alt={`${language.name} Movies`} />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
