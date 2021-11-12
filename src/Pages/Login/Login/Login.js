import React from 'react';
import {  Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {loginUser,authError} = useAuth();
 
    const location = useLocation();
    const history = useHistory();
 
   
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        loginUser(email, password,location,history);
       
    }



    return (
        <div className="container m-5   mx-auto">
            <Navbar bg="light" expand={false} >
  <Container fluid>
    <Navbar.Brand href="#">Auto Mart</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Auto Mart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 p-5">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
         
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
       <div className="row container">
              
                <div className="col-12 col-md-6 mt-5 mx-auto"> 
                <h1 className="care-style">Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="login">


                        <input type="email" className="w-75 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="password" className="w-75 mt-2 p-2"  placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="text-danger pb-2 mb-3">This field is required</span>} <br />
                         <p className="text-danger">{authError}</p>
                        <input  className= "button-regular rounded w-75 fw-bold mb-3" type="submit"  /><br />
                    </form>
                    <p>New to Auto Mart?  <Link to="/Register">Create an account</Link></p>

                   
                </div>
            </div>
        </div>
    );
};

export default Login;