import React from 'react';

const Rating = ({ rating }) => {
    // Create an array with 'rating' number of filled stars
    const filledStars = Array.from({ length: rating }, (_, index) => <span key={index}>★</span>);

    // Calculate the number of empty stars
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => <span key={index}>☆</span>);

    return (
        <div className="rating">
            {filledStars.concat(emptyStars)}
        </div>
    );
};

export default Rating;
