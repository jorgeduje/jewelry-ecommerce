import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate, Outlet} from "react-router-dom"
export const ProtectedRoutes = () => {

    const isLogged = useSelector(state => state.rootReducer.isLogged)
    console.log(isLogged);

    if( isLogged ){

        return <Outlet />

    }else{
        
        return <Navigate to="/"/>
    }

  
};
