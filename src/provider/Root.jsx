import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    const location = useLocation();
    const hidePages = location.pathname.includes('/register') || location.pathname.includes('/login');
    return (
        <div>
            { hidePages || <Navbar />}
            <Outlet/>
        </div>
    );
};

export default Root;