import React from 'react';
import homeImage from "../images/home-1.jpg"; // update path based on your folder
import './Home.css';

function Home() {
  return (
    <div className="home-container" >
      <div className="home-overlay">
        <h1>Welcome to Restaurant</h1>
        <p>Experience the best food in town made with love and fresh ingredients every day.</p>
        <div className="home-buttons">
          <a href="#menu" className="home-btn">View Menu</a>
          <a href="#contact" className="home-btn contact-btn">Contact Us</a>
        </div>
      </div>
      <img src={homeImage} alt="Restaurant" className="home-image" />
    </div>
  );
}

export default Home;
