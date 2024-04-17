import React from 'react';
import {Outlet} from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';

const Layout2 = () =>{
    return (
        <>
            <Header2 />
            <Outlet />
            <Footer />
        </>
    )
};
export default Layout2;