import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

import spinner from '../../../images/spinner.gif';
const PrivateRoute = ({ children, ...rest }) => {
    const { user,loading } = useAuth()

    if(loading){
        return <div>
            <img className="mx-auto" src={spinner} alt="spinner" />
        </div>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) :
                 (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivateRoute;