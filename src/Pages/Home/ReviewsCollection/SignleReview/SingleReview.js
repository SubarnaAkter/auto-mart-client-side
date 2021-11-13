import React from 'react';
import { Card, Col } from 'react-bootstrap';

import StarRatings from 'react-star-ratings';
import placeholder from '../../../../images/placeholder.png'
const SingleReview = ({ review }) => {
   
    const { name, feedback, ratings } = review;
    console.log(ratings)
    return (
        <div>
            <Col>
                <Card>
                   
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {feedback}
                        </Card.Text>
                        {/* <Rating
                         initialRating={3}
                        
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            readonly
                        /> */}
                        <StarRatings
          rating={parseFloat(ratings)}
          starRatedColor="tomato"
          starDimension="25px"
          numberOfStars={5}
          name='rating'
        />
                    </Card.Body>

                </Card>
            </Col>

        </div>
    );
};

export default SingleReview;