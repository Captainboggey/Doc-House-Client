import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation()
    if(loading){
        return  <> render(<ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />)
            </>
          
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
};

export default PrivateRoute;