import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       fetch('http://localhost:5000/products',{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(data)

       })
       .then(res=>res.json())
        .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Product added Successfully',
                        icon:'success',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                      reset()
                }
        })
    }



    return (
        <div>
            <h1 className="pt-5">Add a New Car</h1>
            <div>
                <form className="w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>


                    <input placeholder="Enter Package Name" className="w-100 p-2 m-1" type="text" {...register("name")} required/> <br />

                    <textarea placeholder="Enter Product Details" className="w-100 p-2 m-1" type="text" {...register("details")} required/> <br />

                    <input placeholder="Enter Product price" className="w-100 p-2 m-1" type="number" {...register("price")} required /> <br />
                    <input placeholder="Enter Speed of your Car" className="w-100 p-2 m-1" type="number" {...register("speed")} required /> <br />

                    <input placeholder="Enter image Url" className="w-100 p-2 m-1 " type="img" {...register("img")} required/> <br />


                    <input className="w-100 p-2 m-1 btn-regular" type="submit" />
                </form>
            </div>
        </div>
    );
    }
    export default AddProduct;