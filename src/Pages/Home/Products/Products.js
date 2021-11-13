import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts]=useState([]);
    const size=6;
    useEffect(()=>{
      
        fetch(`http://localhost:5000/products?size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
          
        })
      
    
    },[])
    return (
        <Container>
            <h1 className="text-center my-5"> Brand New Cars</h1>

            <Row xs={1} md={3} className="g-2 my-5 pb-5">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            </Row>
           

        </Container>
    );
};

export default Products;