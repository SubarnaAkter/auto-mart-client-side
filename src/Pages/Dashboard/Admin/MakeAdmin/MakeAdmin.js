import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email} = data;
      fetch('http://localhost:5000/users')
       
    }

    
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
             <input type="email" className="w-75 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />
             <button>Make Admin</button>
             </form>
        </div>
    );
};

export default MakeAdmin;