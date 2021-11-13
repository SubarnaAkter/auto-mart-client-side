
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data)
            );
    }, []);
  
    const handleCancel = (id) => {
        const cancelConfirmed = window.confirm("Are you Sure? You want to Cancel this Booking!");

        if (cancelConfirmed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {


                    if (data.deletedCount > 0) {
                        alert("Booking Canceled?");
                        const remaining = allOrders.filter(order => order._id !== id)
                        setAllOrders(remaining)
                    }

                })
        }
    }
    ///update status
   

    const handleConfirm = (id) => {
       
        
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {

              
                if (data.modifiedCount > 0) {
                    alert("Order Confirmed");
                   
                }
            })
           
        
    }
    return (
        <div>


            <div className="container my-5">
                <h1>All Orders</h1>
                <Table responsive striped bordered hover className="m-5 ">
                    <thead>
                        <tr>
                            <th>Order id</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map(order=> <tr
                                key={order.key} >

                                <td >{order._id.slice(4,10)}</td>

                                <td>{order.name}</td>
                                <td>{order.productName}</td>
                                <td >{order.status}</td>
                                <td >
                                    <button  onClick={() => {
                                        handleConfirm(order._id)}
                                        } className="me-3 btn btn-success">Confirm Order
                                    </button>

                                    <button onClick={() => {
                                        handleCancel(order._id)
                                    }} className="mx-3 btn btn-danger">Cancel Order
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>


        </div >
    );
};

export default ManageAllOrders;