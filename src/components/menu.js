import React, { useState } from 'react';
import './Menu.css';
import Modal from './Modal.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import breakfastImg from '../images/breakfast-1.jpg';
import lunchImg from '../images/lunch-1.jpg';
import dinnerImg from '../images/dinner-1.jpg';
import drinksImg from '../images/drinks-1.jpg';

const menuData = [
  {
    title: "Breakfast",
    img: breakfastImg,
    timing: "8:00 AM - 11:00 AM",
    items: ["Pancakes", "Omelette", "Idli", "Poha"]
  },
  {
    title: "Lunch",
    img: lunchImg,
    timing: "12:00 PM - 3:00 PM",
    items: ["Chicken Curry", "Paneer Butter Masala", "Roti", "Rice"]
  },
  {
    title: "Dinner",
    img: dinnerImg,
    timing: "7:00 PM - 10:00 PM",
    items: ["Biryani", "Dal Makhani", "Salad", "Naan"]
  },
  {
    title: "Drinks",
    img: drinksImg,
    timing: "All Day",
    items: ["Lassi", "Soda", "Mocktail", "Tea"]
  },
];

const slideImages = [breakfastImg, lunchImg, dinnerImg, drinksImg];

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const openModal = (menu) => setSelectedMenu(menu);
  const closeModal = () => setSelectedMenu(null);
  const handlePlaceOrder = (orderDetails) => {
    console.log("Order Placed: ", orderDetails);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="menu-container" id="menu">
      <h2 className="menu-title">Menu Items</h2>

      <div className="menu-grid">
        {menuData.map((menu, index) => (
          <div key={index} className="menu-card">
            <img src={menu.img} alt={menu.title} className="menu-img" />
            <h3>{menu.title}</h3>
            <p>{menu.timing}</p>
            <button onClick={() => openModal(menu)}>View Items</button>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {slideImages.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Slide ${idx}`} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>

      {selectedMenu && (
        <Modal menu={selectedMenu} onClose={closeModal} onPlaceOrder={handlePlaceOrder} />
      )}
    </div>
  );
}

export default Menu;
