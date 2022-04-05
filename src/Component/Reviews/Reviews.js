import React from 'react';
import useReview from '../../Hook/useReview';
import ReviewCard2 from '../ReviewCard/ReviewCard2';

const Reviews = () => {
    const [reviews,setReviews] = useReview();
    return (
        <div>
            {
                reviews.map(review=> <ReviewCard2 key={review.id} review={review}></ReviewCard2>)
            }
        </div>
    );
};

export default Reviews;