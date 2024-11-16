import React from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar';
import './HomePage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
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

    return (
        <div className="home-page">
            <Navbar />
            <h1 className="welcome-text">Welcome to <span className="highlight">prime</span> video</h1>
            
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
