import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.249105297266!2d-122.41941548468186!3d37.774929779759885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74e5bdbb%3A0x9c5a3ee329c14252!2sRestaurant!5e0!3m2!1sen!2sus!4v1615839240004!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> info@restaurant.com</p>
          <p><strong>Address:</strong> 123 Food Street, San Francisco, CA</p>

          <h3>Opening Hours</h3>
          <p><strong>Mon - Fri:</strong> 10:00 AM - 10:00 PM</p>
          <p><strong>Sat - Sun:</strong> 9:00 AM - 11:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
