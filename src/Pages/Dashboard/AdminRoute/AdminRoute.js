import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

import spinner from '../../../images/spinner.gif';
const AdminRoute = ({ children, ...rest }) => {
    const { user,loading,admin } = useAuth()

    if(loading){
        return <div>
            <img  className="mx-auto" src={spinner} alt="spinner" />
        </div>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) :
                 (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default AdminRoute;