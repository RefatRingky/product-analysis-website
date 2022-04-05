import React from 'react';
import useReview from '../../Hook/useReview';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews,setReview] = useReview();
    return (
        <div className='container'>
           <div className='row d-flex gap-5'>
           {
              reviews.map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>) 
           }
        </div>
        </div>
        


   
    );
};

export default Review;