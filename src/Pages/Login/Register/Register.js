import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'
const Register = () => {
    const { registerUser, authError } = useAuth();

 
    const history = useHistory();



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password,userName ,password2} = data;
        if(password!==password2){
             Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password not matched!',
                  
                  })
        }
        else{

        registerUser(email, password, userName,  history);
        }

    }



    return (
        <div className="row pb-5  reg-page  mx-auto ">
             <Navbar expand={false}  variant="dark">
  <Container fluid >
    <Navbar.Brand href="#home">Auto Mart</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton  >
        <Offcanvas.Title id="offcanvasNavbarLabel"  >Auto Mart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 p-5">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
         
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
          <div  className="col-12 container col-md-6  p-5">
                  <div className="register  text-center bg-info w-75 mx-auto p-3 ">
                      <h1>Register</h1>
                      <h3>Auto mart</h3>
                  </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="login w-100 bg-dark p-5 pt-5 mx-auto border " >
                        <input type="text" className="w-100 my-2 p-2 mt-5" placeholder="Enter your Name" {...register("userName")} /> <br />

                        <input type="email" className="w-100 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="password" className="w-100 mt-2 p-2" placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
                        <input type="password" className="w-100 mt-2 p-2" placeholder="Re-Enter your Password" {...register("password2", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="text-danger pb-2 mb-3">This field is required</span>} <br />
                        <p className="text-danger">{authError}</p>
                        <input className="button-regular rounded w-100 fw-bold mb-3" type="submit" /><br />
                    </form>
                    <p className="text-white text-center">Already Registered?  <Link to="/login">Please Login</Link></p>
          </div>
        </div>
    );
};

export default Register;