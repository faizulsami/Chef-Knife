import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer_1 from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer_1></Footer_1>
        </div>
    );
};

export default Main;