import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewCard2 = (props) => {
    const { name, rating, picture, review } = props.review;
    return (
        <div className='col-3 py-2'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${picture}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title><h6>{`Rating : ${rating}`}</h6></Card.Title>
                <Card.Text>
                    {review}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};

export default ReviewCard2;