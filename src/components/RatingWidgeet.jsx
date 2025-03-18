import React, { useState } from 'react';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0); // Local state to track selected rating
  const [hoveredRating, setHoveredRating] = useState(0); // Local state to track hovered rating

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (value) => {
    setRating(value); // Update the selected rating on click
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5');
      return;
    }
    onRatingSubmit(productId, rating); // Submit the rating to the parent
    setRating(0); // Reset the rating state after submission
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''}`}
        onClick={() => handleClick(star)}
        onMouseEnter={() => handleMouseEnter(star)}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="rating-widget">
      <div className="stars">{renderStars()}</div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

export default RatingWidget;