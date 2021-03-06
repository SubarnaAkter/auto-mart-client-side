import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const AllProduct = ({ product }) => {
    const {_id, name, speed, details, price, img } = product;
    return (
        <Col>
            <Fade left>
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
                  <Link to={`/booking/${_id}`}  ><Button className="w-100 btn-regular">Buy Now</Button></Link>
                </Card.Footer>
            </Fade>
            </Col>
            );
};
 export default AllProduct;