import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';


const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()
    if (checkingStatus) {
        return <Spinner />
        //return <h2>Loading....</h2>
      }
    
    return (
        <div>
            {
               loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
            }
        </div>
    );
};

export default PrivateRoute;