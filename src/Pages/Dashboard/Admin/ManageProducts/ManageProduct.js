import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ManageProduct = ({product,handleDeleteProduct}) => {

    const {_id, name, speed, details, price, img } =product;
  
    return (
        <Col>
            <Card>
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
                <Button onClick={()=>{
                      handleDeleteProduct(_id)
                  }} variant="danger" className="mx-1 w-100">Delete Product</Button>
                </Card.Footer>
            </Card>
            </Col>
            );
};


export default ManageProduct;