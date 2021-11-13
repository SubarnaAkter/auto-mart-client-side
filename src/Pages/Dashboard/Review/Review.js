
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const {user}=useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
       
        fetch('https://pure-springs-40061.herokuapp.com/reviews', {
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
                        title: 'Thanks for your Review',
                        icon: 'success',
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
            <form className="w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>


                <input defaultValue={user.displayName} className="w-100 p-2 m-1" type="text" {...register("name")} required /> <br />

                <textarea placeholder="Write Feedback" className="w-100 p-5 m-1" type="text" {...register("feedback")} required /> <br />

                <input placeholder="Give ratings" className="w-100 p-2 m-1" type="number" {...register("ratings", { min: 0, max: 5 })} required /> <br />


                <input className="w-100 p-2 m-1 btn-regular" type="submit" />
            </form>
        </div>
    );
};

export default Review;