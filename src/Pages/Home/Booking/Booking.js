import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Booking = () => {

  const { productId } = useParams()
  const [booking, setBooking] = useState({})
  const { user } = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then(res => res.json())
      .then(data => setBooking(data))
  }
    , [])

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          Swal.fire({

            icon: 'success',
            title: 'Order Placed Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <h5 className="bg-success my-5 p-3 text-white ">{booking.name} is added to your order List</h5>

        <div className="container my-5">
          <div className="row  g-4 my-5">
            <div className="col-12 col-md-7">
              <div className="card d-flex flex-md-row  flex-col">
                <img src={booking.img} className="w-50 " alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">{booking.name}</h5>
                  <p className="card-text">{booking.details}.</p>
                  <h5 className="card-title">$ {booking.price}/person</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user.displayName} className="w-100 p-2 m-1" type="text" {...register("name")} readOnly /> <br />

                  <input defaultValue={user.email} className="w-100 p-2 m-1" type="email" {...register("email")} readOnly /> <br />

                  <input placeholder=" Selected Product name"  className="w-100 p-2 m-1" type="text" {...register("productName")} required /> <br />

                  <input placeholder="Enter your Address" className="w-100 p-2 m-1 " type="text" {...register("address")} /> <br />
                  <input placeholder="Enter Contact No." className="w-100 p-2 m-1" type="number" {...register("contact")} /> <br />
                  <input defaultValue="pending" className="w-100 p-2 m-1" type="text" {...register("status")} hidden /> <br />
                  <input className="w-100 p-2 m-1 bg-success text-white fw-bold" type="submit" value="Place Order" />
                  <Link to="/myBookings"><button className="btn-regular">See my Orders</button></Link>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Booking;