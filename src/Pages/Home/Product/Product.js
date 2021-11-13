import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Product = (props) => {
    const {_id, name, speed, details, price, img } = props.product;
    return (

        <Col>
            <Zoom left>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
   
                    <Card.Text>
                        {speed} KM/h
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="m-0 p-0">
                   <Link to={`/booking/${_id}`} > <Button  className="w-100  btn-regular">Buy Now</Button></Link>
                </Card.Footer>
            </Zoom>
        </Col>

    );
};

export default Product;