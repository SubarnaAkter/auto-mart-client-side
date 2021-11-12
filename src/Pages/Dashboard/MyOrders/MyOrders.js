import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {

    const {user}=useAuth()
    const [myOrders,setMyOrders]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res=>res.json())
        .then(data=>{
          const myOrders= data.filter(order=>order.email===user.email)
          setMyOrders(myOrders)
        });
       },[]);

       const  handleCancelBooking=(id)=>{

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
                fetch(`http://localhost:5000/orders/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                 if(data.deletedCount>0){
                  
                    Swal.fire(
                        'Deleted!',
                        'Your Order has been Canceled.',
                        'success'
                     )
                     const remaining=myOrders.filter(myOrder=>myOrder._id!==id)
                     setMyOrders(remaining)
                 }
     
                })
            
            }
          })
        
          }
          
    return (
        <div>
            <div>
          {
              myOrders.map(myOrder=> <Card key={myOrder._id} className=" m-5 w-50 mx-auto"> 
               
              <Card.Body className="ps-5">
                  <Card.Title>{myOrder.name}</Card.Title>
                  <Card.Text>
                      Address: {myOrder.address}
                  </Card.Text>
                  <Card.Text>
                      Contact No : {myOrder.contact}
                  </Card.Text>
                  <Card.Text>
                      Package: {myOrder.productName}               
                  </Card.Text>
                  <Card.Text>
                      Status: {myOrder.status}               
                  </Card.Text>
                 
                  <Button onClick={()=>{
                      handleCancelBooking(myOrder._id)
                  }} variant="danger" className="mx-1">Cancel Order</Button>
                  
              </Card.Body>
          </Card>)
          }
        </div>
        </div>
    );
};

export default MyOrders;