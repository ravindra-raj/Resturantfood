import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand">
          <h2>🍽️ Foodie's Haven</h2>
          <p>Your destination for delicious experiences and unforgettable flavors.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📍 123 Food Street, San Francisco, CA</p>
          <p>📞 +1 (123) 456-7890</p>
          <p>📧 info@restaurant.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section hours">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Foodie's Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
