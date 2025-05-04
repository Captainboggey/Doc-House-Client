import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
// import { ProgressBar } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation()
    if(loading){
        return  <> <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
            </>
          
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
};

export default PrivateRoute;