
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../../Hook/useReview';
import ReviewCard from '../Review/ReviewCard';
import './Home.css'


const Home = () => {
    const[reviews,setReviews] = useReview();
    console.log(reviews);
    return (
       
<div className='container'>
            <div className='row py-5'>
                <div className='col-6 pt-5'>
                    <h1>Rinrav's Laptop House</h1>
                    <h3>The Latest Collection Is Available</h3>
                    <p>You can grap the latest product from now.Ravrav's Laptop house is trustable and you can get the original product from us.All type of branded Laptop is available from now.And we also our own servicing house.</p>
                    <div className='text-center Custom-Button py-5'>
                    <Link to='/'>See All Product</Link> 
                    </div>
                    
                   
                   
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                   <img width="500" height="400" src={'img/laptop.jpg'}></img> 
                </div>
            </div>
            <h2>Review Details</h2>
            <div >
                
                <div className='row d-flex gap-5'>
                    {reviews.slice(0,3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)}
                    
                </div>
            </div>
            <div className='text-center Custom-Button py-5'>
               <Link to='/review'>See All Reviews</Link> 
            </div>
     </div>
     
      
        
    );
};

export default Home;