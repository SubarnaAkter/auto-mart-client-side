import React from 'react';
import {Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const {products} = useProducts()
    return (
        <Container>
            <h1 className="text-center my-5"> Brand New Cars</h1>

            <Row xs={1} md={3} className="g-2 my-5 pb-5">
            {
                products.map(product => <Product
                    key={product.name}
                    product={product}
                ></Product>)
            }
            </Row>
           

        </Container>
    );
};

export default Products;