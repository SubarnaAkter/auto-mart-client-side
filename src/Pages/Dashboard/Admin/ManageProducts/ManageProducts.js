import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
   
   
   useEffect(()=>{
      
       fetch('https://pure-springs-40061.herokuapp.com/products')
       .then(res=>res.json())
       .then(data=>{
        setProducts(data)
          
       })
     
   
   },[])

   const handleDeleteProduct=(id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://pure-springs-40061.herokuapp.com/products/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
             if(data.deletedCount>0){
              
                Swal.fire(
                    'Deleted!',
                    'Products is Removed from your Products List.',
                    'success'
                 )
                 const remaining=products.filter(product=>product._id!==id)
                 setProducts(remaining)
             }
 
            })
        
        }
      })
}
    return (
       <div>
           <h1 className="text-success">Manage All Products</h1>
             <Container>
          
            <h1 className="text-center my-5">All Cars</h1>

            <Row xs={1} md={3} className="g-2 mb-5">
            {
                products.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                handleDeleteProduct={handleDeleteProduct}
                ></ManageProduct>)
            }
            </Row>
           

        </Container>
        
       </div>
    );
};

export default ManageProducts;