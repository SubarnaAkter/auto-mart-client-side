import { Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth()
    return (
       <Container>
            <h1 className="text-center mt-5 pt-5" >
              WelCome {user.displayName}
        </h1>
       </Container>
    );
};

export default DashboardHome;