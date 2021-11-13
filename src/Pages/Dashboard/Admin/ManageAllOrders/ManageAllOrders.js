
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [status,setStatus]= useState(true);
    
    useEffect(() => {
        fetch(`https://pure-springs-40061.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data)
            );
    }, [status]);
  
    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed)  {
            fetch(`https://pure-springs-40061.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {


                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Order is Removed from Order List.',
                            'success'
                         )
                        const remaining = allOrders.filter(order => order._id !== id)
                        setAllOrders(remaining)
                    }

                })
        }
    })
    }
    ///update status
   

    const handleConfirm = (id) => {
       
        setStatus(false)
        
        fetch(`https://pure-springs-40061.herokuapp.com/orders/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {

              
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Order Confirmed',
                        icon:'success',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                  
                }
                setStatus(true) 
            })
           
        
    }
    return (
        <div>


            <div className="container my-5">
                <h1 className="text-center">All Orders</h1>
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