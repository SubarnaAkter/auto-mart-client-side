import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Shared/Navigation/Navigation';
import AllProduct from './AllProduct/AllProduct';

const Explore = () => {
    const [allproducts,setAllProducts]=useState([]);
    
    
   useEffect(()=>{
      
       fetch('http://localhost:5000/products')
       .then(res=>res.json())
       .then(data=>{
        setAllProducts(data)
         
       })
     
   
   },[])
    return (
       <div>
             <Navigation></Navigation>
            <Container>
          
            <h1 className="text-center my-5">All Cars</h1>

            <Row xs={1} md={3} className="g-2 mb-5">
            {
                allproducts.map(product => <AllProduct
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