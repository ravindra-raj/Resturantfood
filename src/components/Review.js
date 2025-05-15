import React, { useEffect, useRef } from 'react';
import './Review.css';

const reviews = [
  {
    name: 'John Doe',
    review: 'Amazing food and cozy atmosphere. Loved the service!',
    rating: 5,
    food: 'Delicious Biryani',
    atmosphere: 'Warm & welcoming',
  },
  {
    name: 'Emily Smith',
    review: 'A perfect place for family dinner. Clean and hygienic.',
    rating: 4,
    food: 'Tandoori Platter',
    atmosphere: 'Family-friendly vibes',
  },
  {
    name: 'Arjun Patel',
    review: 'Great taste and excellent staff behavior.',
    rating: 5,
    food: 'Paneer Butter Masala',
    atmosphere: 'Traditional Indian decor',
  },
  {
    name: 'Lisa Green',
    review: 'Loved the ambiance and their desserts!',
    rating: 4,
    food: 'Chocolate Lava Cake',
    atmosphere: 'Romantic and quiet',
  },
];

function Review() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollPosition = 0;

    const slideWidth = slider.firstChild.offsetWidth + 20; // card width + gap (adjust gap accordingly)

    const slide = () => {
      if (!slider) return;

      scrollPosition += 1; // speed: px per interval
      if (scrollPosition >= slider.scrollWidth / 2) {
        // reset after half (because we will duplicate cards for infinite scroll)
        scrollPosition = 0;
      }
      slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(slide, 15); // smaller ms = faster

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate reviews array to create infinite loop illusion
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="review-section">
      <h2 className="review-title">Customer Reviews</h2>
      <div className="review-slider" ref={sliderRef}>
        {duplicatedReviews.map((item, index) => (
          <div className="review-card" key={index}>
            <h3>{item.name}</h3>
            <p className="review-text">"{item.review}"</p>
            <p><strong>Food:</strong> {item.food}</p>
            <p><strong>Atmosphere:</strong> {item.atmosphere}</p>
            <p className="review-rating">⭐ {item.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
