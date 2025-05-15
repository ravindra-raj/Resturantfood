import React from 'react';
import aboutImage from "../images/abou-1.jpg";
import './About.css'; // Make sure this file is created

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <div className="about-image-container">
          <img src={aboutImage} alt="Restaurant" className="about-image" />
        </div>
        <div className="about-text">
          <h3>Welcome to Our Restaurant</h3>
          <p>
            We offer the finest dining experience with a mix of traditional and contemporary cuisines.
            Our chefs use fresh, locally-sourced ingredients to create mouth-watering dishes you'll never forget.
            Whether you're here for a quick bite or a family celebration, our warm and inviting atmosphere is perfect for every occasion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
