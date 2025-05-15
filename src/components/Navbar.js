import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        {/* Left: Logo + Menu */}
        <div className="navbar-left">
          <FaBars className="icon menu-icon" title="Menu" onClick={() => setMenuOpen(!menuOpen)} />
          <h2 className="logo-text">🍽️ Foodie's Haven</h2>
        </div>

        {/* Center: Navigation Links */}
        <div className={`navbar-center ${menuOpen ? 'show-menu' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right: Book Table Button */}
        <div className="navbar-right">
          <button className="book-btn" onClick={() => setModalOpen(true)}>Book Table</button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Book a Table</h2>
            <form className="booking-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" required />
              <input type="time" required />
              <input type="number" placeholder="Guests" min="1" max="20" required />
              <button type="submit">Confirm Booking</button>
              <button type="button" className="close-btn" onClick={() => setModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
