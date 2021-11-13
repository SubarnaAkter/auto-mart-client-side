import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SignleReview/SingleReview';

const Allreview = () => {
    const [reviews,setReviews]=useState([]);
   
    useEffect(()=>{
      
        fetch(`https://pure-springs-40061.herokuapp.com/reviews`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
          
        })
      
    
    },[])
    return (
        <Container>
            <h1 className="text-center my-5"> Our client Says</h1>

            <Row xs={1} md={3} className="g-2 my-5 pb-5">
            {
                reviews.map(review => <SingleReview
                    key={review._id}
                    review={review}
                ></SingleReview>)
            }
            </Row>
           

        </Container>
    );
};

export default Allreview;