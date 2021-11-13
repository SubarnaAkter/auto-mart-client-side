import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Shared/Navigation/Navigation';
import AllProduct from './AllProduct/AllProduct';
import useProducts from '../../Hooks/useProducts'
import MyOrders from '../Dashboard/MyOrders/MyOrders';
const Explore = () => {

    
    const {products}=useProducts();
    return (
       <div>
             <Navigation></Navigation>
             <MyOrders></MyOrders>
            <Container>
          
            <h1 className="text-center my-5">All Cars</h1>

            <Row xs={1} md={3} className="g-2 mb-5">
            {
                products.map(product => <AllProduct
                    key={product._id}
                    product={product}
                ></AllProduct>)
            }
            </Row>
           

        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Explore;