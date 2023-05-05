import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Spinner
        color="warning"
        aria-label="Warning spinner example"
    />
    }
    if (user) {
        return children;
    }
    return (
    <Navigate state={{from: location}} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;