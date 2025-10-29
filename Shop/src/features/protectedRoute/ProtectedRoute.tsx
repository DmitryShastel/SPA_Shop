import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";

export const CheckUpToken = ({children } :  { children: React.ReactNode }) => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const token = localStorage.getItem('authToken')

        if (token) {
            if (location.pathname === '/auth/login') {
                navigate('/listOfProduct', { replace: true });
            }
        } else {
            if (location.pathname !== '/auth/login') {
                navigate('/auth/login', { replace: true });
            }
        }
    }, [location.pathname, navigate])

    return <>{children}</>;
};

