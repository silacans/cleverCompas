import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'

const Home = () => {
  const [images, setImages] = useState([]);

  // Fetch images from Unsplash API
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?query=education&count=3&client_id=yKlHJE6mNFgMWAi_TWX3DpjwDntKUdOWdlvxOKdyMTI')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to CleverCampus</h1>
          <p>Empower your learning journey with modern tools and resources.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </header>
      <section className="image-gallery">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </section>
    </div>
  );
};

export default Home;