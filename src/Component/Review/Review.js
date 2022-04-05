import React from 'react';
import useReview from '../../Hook/useReview';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews,setReview] = useReview();
    return (
        <div>
           {
              reviews.map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>) 
           }
        </div>
        


   
    );
};

export default Review;